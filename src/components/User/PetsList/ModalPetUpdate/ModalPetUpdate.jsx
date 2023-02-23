import { useState } from 'react';
import { useDispatch } from 'react-redux';
import userOperations from 'redux/user/operations';

import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { parse, isDate } from 'date-fns';

import stylesUbdate from './ModalPetUpdate.styled';

const {
  PetItemUpdateWrapp,
  PetItemUpdatePhotoWrapp,
  PetUpdateFoto,
  PetInfoUpdateWrapp,
  PetInfoUpdate,
  PetInfoUpdateLabel,
  PetInfoUpdateInput,

  PetInfoUpdateItemComment,
  PetInfoUpdateInputComment,

  ErrorMsg,
  ModalDeletePetButtonsGroup,
  ButtonCancel,
  ButtonUpdate,
  PetInfoUpdateItem,
} = stylesUbdate;

const { updateUserPet } = userOperations;

const RegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

let schema = yup.object().shape({
  name: yup
    .string()
    .trim()
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
    .min(2)
    .max(16),
  photo: yup.mixed().test('fileType', 'Unsupported file type', value => {
    return (
      typeof value === 'string' ||
      (value &&
        [
          'image/jpeg',
          'image/png',
          'image/jpg',
          'image/gif',
          'image/jpg',
          'image/jfif',
          'image/pjpeg',
          'image/pjp',
          'image/webp',
        ].includes(value.type))
    );
  }),
  comments: yup.string('Comment should be 8 to 120 characters long').trim().min(8).max(120),
});

const ModalPetUpdate = ({ setShowModalPet, pet }) => {
  const { _id, name, birthday, breed, comments, photo } = pet;
  const [fileInput, setFileInput] = useState('');

  const [formData, setFormData] = useState({ name, birthday, breed, comments, photo });

  const dispatch = useDispatch();

  const onClosePet = () => {
    setShowModalPet(false);
  };

  // =================================================================

  const handleFormSubmit = async newData => {
    setFormData({ ...formData, ...newData });
    const dataToSend = new FormData();
    for (const [key, value] of Object.entries(newData)) {
      if (key === 'photo' && typeof value === 'string') {
        continue;
      }
      dataToSend.append(key, value);
    }
    dispatch(updateUserPet({ _id, dataToSend }));
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
          <PetItemUpdateWrapp encType="multipart/form-data">
            <PetItemUpdatePhotoWrapp>
              {fileInput ? (
                <PetUpdateFoto src={URL.createObjectURL(fileInput)} alt={fileInput.name} />
              ) : (
                <PetUpdateFoto src={photo} alt="pet foto" />
              )}
              <input
                type="file"
                name="photo"
                accept=".png, .jpeg, .jpg, .webp"
                onChange={e => selectFile(e, setFieldValue)}
              />
              <ErrorMessage name="photo">{msg => <ErrorMsg>{msg}</ErrorMsg>}</ErrorMessage>
            </PetItemUpdatePhotoWrapp>

            <PetInfoUpdateWrapp>
              <PetInfoUpdate>
                <PetInfoUpdateItem>
                  <PetInfoUpdateLabel htmlFor="name">Name:</PetInfoUpdateLabel>
                  <PetInfoUpdateInput type="text" name="name" id="name" />
                  <ErrorMessage name="name">{msg => <ErrorMsg>{msg}</ErrorMsg>}</ErrorMessage>
                </PetInfoUpdateItem>

                <PetInfoUpdateItem>
                  <PetInfoUpdateLabel htmlFor="birthday">Date of birth:</PetInfoUpdateLabel>
                  <PetInfoUpdateInput name="birthday" id="birthday" />
                  <ErrorMessage name="birthday">{msg => <ErrorMsg>{msg}</ErrorMsg>}</ErrorMessage>
                </PetInfoUpdateItem>

                <PetInfoUpdateItem>
                  <PetInfoUpdateLabel htmlFor="breed">Breed:</PetInfoUpdateLabel>
                  <PetInfoUpdateInput type="text" name="breed" id="breed" />
                  <ErrorMessage name="breed">{msg => <ErrorMsg>{msg}</ErrorMsg>}</ErrorMessage>
                </PetInfoUpdateItem>

                <PetInfoUpdateItemComment>
                  <PetInfoUpdateLabel htmlFor="comments">Comments:</PetInfoUpdateLabel>
                  <PetInfoUpdateInputComment
                    component="textarea"
                    name="comments"
                    id="comments"
                    onChange={e => handleInputChange(e, setFieldValue)}
                  />
                  <ErrorMessage name="comments">{msg => <ErrorMsg>{msg}</ErrorMsg>}</ErrorMessage>
                </PetInfoUpdateItemComment>
              </PetInfoUpdate>
            </PetInfoUpdateWrapp>
            <ModalDeletePetButtonsGroup>
              <ButtonUpdate type="submit">Update pet</ButtonUpdate>
              <ButtonCancel type="button" onClick={e => onClosePet(e)}>
                Cancel
              </ButtonCancel>
            </ModalDeletePetButtonsGroup>
          </PetItemUpdateWrapp>
        )}
      </Formik>
    </>
  );
};

export default ModalPetUpdate;
