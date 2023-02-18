import { useState } from 'react';
import { useDispatch } from 'react-redux';
import userOperations from 'redux/user/operations';

import { Form, Formik, ErrorMessage, Field } from 'formik';
import * as yup from 'yup';
import { parse, isDate } from 'date-fns';

import styles from './PetsList.styled';

import ModalUser from '../ModalUser';
import ModalPetDelete from './ModalPetDelete';

const {
  PetItemPhotoWrapp,
  PetInfo,
  PetInfoName,
  PetInfoFoto,
  PetInfoWrapp,
  PetDeleteButton,
  PetDeleteIcon,
} = styles;

const { updateUserPet } = userOperations;

const RegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const MIN_FILE_SIZE = 10240; //10KB

let schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .min(2)
    .max(16)
    .matches(RegExp, 'Name may contain only letters, apostrophe, dash and spaces')
    .required(),
  birthday: yup
    .date()
    .test('format', 'Type in format 01.01.1910', (_, { originalValue }) => {
      if (originalValue) {
        return originalValue.length === 10;
      }
    })
    .transform((_, originalValue) => {
      const parsedDate = isDate(originalValue)
        ? originalValue
        : parse(originalValue, 'dd.MM.yyyy', new Date());
      return parsedDate;
    })
    .min(new Date(1950, 1, 1), 'Birthday should be after 1950')
    .max(new Date(), 'Birthday could not be after today')
    .typeError('Date should be in dd.mm.yyyy format'),
  breed: yup
    .string()
    .trim()
    .matches(RegExp, 'Breed may contain only letters, apostrophe, dash and spaces.')
    .min(2)
    .max(16)

    .required(),
  photo: yup
    .mixed()
    .required('Image is Required!')
    .test(
      'fileType',
      'Unsupported file type',
      value => value && ['image/jpeg', 'image/png', 'image/jpg'].includes(value.type)
    )
    .test(
      'is-valid-size',
      'Max allowed size is 10KB',
      value => value === null || (value && value.size >= MIN_FILE_SIZE)
    ),
  comments: yup
    .string()
    .trim()
    .min(8)
    .max(120)
    .required('Comment should be 8 to 120 characters long'),
});

const ModalPetUpdate = ({ pet }) => {
  const { _id, name, birthday, breed, photo, comments } = pet;
  const [showModal, setShowModal] = useState(false);
  const [fileInput, setFileInput] = useState('');

  const [formData, setFormData] = useState({
    name: name,
    birthday: birthday,
    breed: breed,
    photo: photo,
    comments: comments,
  });

  const dispatch = useDispatch();
  // console.log(pet);

  const onClose = () => {
    setShowModal(true);
  };

  const fetchPet = form => {
    dispatch(updateUserPet({ _id, form }));
  };

  // ----------------------------------------------------

  const handleFormSubmit = async newData => {
    console.log(newData);
    setFormData(values => ({ ...values, ...newData }));

    try {
      const dataToSend = new FormData();
      for (const [key, value] of Object.entries(newData)) {
        dataToSend.append(key, value);
      }
      await fetchPet(dataToSend);
      onClose();
    } catch (error) {
      console.log(error);
    }
  };
  const handleInputChange = (e, setFieldValue) => {
    const inputName = e.target.name;
    let value = e.target.value;
    setFieldValue(inputName, value);
    setFormData(values => ({ ...values, [inputName]: value }));
  };

  const selectFile = (e, setFieldValue) => {
    const fileImg = e.target.files[0];
    console.log(fileImg);

    if (fileImg) {
      setFileInput(fileImg);
      setFieldValue('photo', fileImg);
      setFormData(values => ({ ...values, photo: fileImg }));
    }
  };

  return (
    <>
      <Formik
        initialValues={formData}
        validationSchema={schema}
        onSubmit={handleFormSubmit}

        // onSubmit={async values => {
        //   await new Promise(r => setTimeout(r, 500));
        //   alert(JSON.stringify(values, null, 2));
        // }}
      >
        {({ setFieldValue }) => (
          <Form encType="multipart/form-data">
            <PetItemPhotoWrapp>
              {fileInput ? (
                <PetInfoFoto src={URL.createObjectURL(fileInput)} alt={fileInput.name} />
              ) : (
                <PetInfoFoto src={photo} alt="pet foto" />
              )}
              {/* {fileInput && <PetInfoFoto src={fileInput} alt="pet foto" />} */}
              {/* {<PetInfoFoto src={URL.createObjectURL(fileInput)} alt="pet foto" />} */}
              <input
                type="file"
                name="photo"
                accept=".png, .jpeg, .jpg, .webp"
                onChange={e => selectFile(e, setFieldValue)}
              />
            </PetItemPhotoWrapp>

            <PetInfoWrapp>
              <PetInfo>
                <li>
                  <label htmlFor="name">Name:</label>
                  <Field type="text" name="name" required id="name" />
                </li>

                <li>
                  <label htmlFor="birthday">Date of birth:</label>
                  <Field name="birthday" required id="birthday" />
                </li>

                <li>
                  <label htmlFor="breed">Breed:</label>
                  <Field type="text" name="breed" required id="breed" />
                </li>

                <li>
                  <label htmlFor="comments">Comments:</label>
                  <Field
                    component="textarea"
                    name="comments"
                    required
                    id="comments"
                    onChange={e => handleInputChange(e, setFieldValue)}
                  />
                </li>
              </PetInfo>

              <button type="submit">Update pet</button>

              <PetDeleteButton type="button" onClick={onClose}>
                <PetDeleteIcon />
              </PetDeleteButton>
            </PetInfoWrapp>
          </Form>
        )}
      </Formik>

      {showModal && (
        <ModalUser setShowModal={setShowModal}>
          <ModalPetDelete setShowModal={setShowModal} petId={_id} />
        </ModalUser>
      )}
    </>
  );
};

export default ModalPetUpdate;
