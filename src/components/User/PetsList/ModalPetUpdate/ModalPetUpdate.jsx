import { useState } from 'react';
import { useDispatch } from 'react-redux';
import userOperations from 'redux/user/operations';

import { Form, Formik, ErrorMessage, Field } from 'formik';
import * as yup from 'yup';
import { parse, isDate } from 'date-fns';

import styles from '../PetsList.styled';
import stylesUbdate from './ModalPetUpdate.styled';

const { PetItemUbdateWrapp, PetItemUpdatePhotoWrapp, PetUbdateFoto } = stylesUbdate;

const { PetInfo, PetInfoName, PetInfoFoto, PetInfoWrapp, PetDeleteButton, PetDeleteIcon } = styles;

const { updateUserPet } = userOperations;

const RegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const MIN_FILE_SIZE = 10240; //10KB

let schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    // .required()
    .min(2)
    .max(16)
    .matches(RegExp, 'Name may contain only letters, apostrophe, dash and spaces'),

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
    // .required()
    .min(2)
    .max(16),
  photo: yup
    .mixed()
    // .required('Image is Required!')
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
  comments: yup.string('Comment should be 8 to 120 characters long').trim().min(8).max(120),
  // .required('Comment should be 8 to 120 characters long'),
});

const ModalPetUpdate = ({ setShowModalPet, pet }) => {
  console.log(pet);
  const { _id, name, birthday, breed, photo, comments } = pet;
  const [showModal, setShowModal] = useState(false);
  const [fileInput, setFileInput] = useState('');

  const [formData, setFormData] = useState(pet);

  const dispatch = useDispatch();
  // console.log(pet);

  const onClosePet = () => {
    setShowModalPet(false);
  };

  const fetchPet = form => {
    dispatch(updateUserPet({ _id, form }));
  };

  // ----------------------------------------------------

  const handleFormSubmit = async newData => {
    console.log(newData);
    setFormData(values => ({ ...values, ...newData }));
    console.log(formData);

    fetchPet(formData);
    onClosePet();
  };
  // =================================================================

  const handleInputChange = (e, setFieldValue) => {
    const inputName = e.target.name;
    let value = e.target.value;
    setFieldValue(inputName, value);
    setFormData(values => ({ ...values, [inputName]: value }));
  };

  const selectFile = (e, setFieldValue) => {
    const fileImg = e.target.files[0];

    if (fileImg) {
      setFileInput(fileImg);
      setFieldValue('photo', fileImg);
      setFormData(values => ({ ...values, photo: fileImg }));
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          name: name,
          birthday: birthday,
          breed: breed,
          photo: photo,
          comments: comments,
        }}
        validationSchema={schema}
        onSubmit={handleFormSubmit}
      >
        {({ setFieldValue }) => (
          <PetItemUbdateWrapp encType="multipart/form-data">
            <PetItemUpdatePhotoWrapp>
              {fileInput ? (
                <PetUbdateFoto src={URL.createObjectURL(fileInput)} alt={fileInput.name} />
              ) : (
                <PetUbdateFoto src={photo} alt="pet foto" />
              )}
              {/* {fileInput && <PetInfoFoto src={fileInput} alt="pet foto" />} */}
              {/* {<PetInfoFoto src={URL.createObjectURL(fileInput)} alt="pet foto" />} */}
              <input
                type="file"
                name="photo"
                accept=".png, .jpeg, .jpg, .webp"
                onChange={e => selectFile(e, setFieldValue)}
              />
              <ErrorMessage name="photo">{msg => <p>{msg}</p>}</ErrorMessage>
            </PetItemUpdatePhotoWrapp>

            <PetInfoWrapp>
              <PetInfo>
                <li>
                  <label htmlFor="name">Name:</label>
                  <Field type="text" name="name" id="name" />
                  <ErrorMessage name="name">{msg => <p>{msg}</p>}</ErrorMessage>
                </li>

                <li>
                  <label htmlFor="birthday">Date of birth:</label>
                  <Field name="birthday" id="birthday" />
                  <ErrorMessage name="birthday">{msg => <p>{msg}</p>}</ErrorMessage>
                </li>

                <li>
                  <label htmlFor="breed">Breed:</label>
                  <Field type="text" name="breed" id="breed" />
                  <ErrorMessage name="breed">{msg => <p>{msg}</p>}</ErrorMessage>
                </li>

                <li>
                  <label htmlFor="comments">Comments:</label>
                  <Field
                    component="textarea"
                    name="comments"
                    id="comments"
                    onChange={e => handleInputChange(e, setFieldValue)}
                  />
                  <ErrorMessage name="comments">{msg => <p>{msg}</p>}</ErrorMessage>
                </li>
              </PetInfo>

              <button type="submit">Update pet</button>

              <PetDeleteButton type="button" onClick={e => onClosePet(e)}>
                <PetDeleteIcon />
              </PetDeleteButton>
            </PetInfoWrapp>
          </PetItemUbdateWrapp>
        )}
      </Formik>
    </>
  );
};

export default ModalPetUpdate;
