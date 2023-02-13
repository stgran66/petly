import React, { useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import styles from './Model.Steps.styled';
const {
  FormWrapp,
  FormInputWrappSecond,
  ButtonsGroup,
  ButtonWhite,
  ButtonAccent,
  FormText,
  FotoWrap,
  PetFoto,
  PetFotoIcon,
  PetFotoInputLabel,
  CommentWrapp,
  InputCommentValue,
} = styles;

// const IMAGE_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

let schema = yup.object().shape({
  photo: yup.mixed().required('Image is Required! Example: jpg,jpeg,png'),
  // .test(
  //   'fileFormat',
  //   'Unsupported file type',
  //   value => value === null || (value && IMAGE_FORMATS.includes(value.type))
  // ),
  comments: yup
    .string()
    .min(8)
    .max(120)
    .required('comment should be 8 to 120 characters long'),
});

const ModelPetStepTwo = ({ next, data, setFormData, prev }) => {
  const [fileInput, setFileInput] = useState(data.photo);

  const handleFormSubmit = values => {
    next({ ...values }, true);
  };

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
    <Formik
      initialValues={data}
      validationSchema={schema}
      onSubmit={handleFormSubmit}
    >
      {({ setFieldValue }) => (
        <FormWrapp autoComplete="on">
          <FormInputWrappSecond>
            <FormText>Add photo and some comments</FormText>
            <FotoWrap enctype="multipart/form-data">
              {fileInput ? (
                <PetFoto
                  src={URL.createObjectURL(fileInput)}
                  alt={fileInput.name}
                />
              ) : (
                <PetFotoInputLabel>
                  <PetFotoIcon />
                  <InputCommentValue
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={e => selectFile(e, setFieldValue)}
                    hidden
                  />
                </PetFotoInputLabel>
              )}

              <ErrorMessage component="span" name="photo" />
            </FotoWrap>

            <CommentWrapp>
              <label htmlFor="comments">Comments</label>
              <InputCommentValue
                component="textarea"
                name="comments"
                required
                placeholder="Type comments"
                id="comments"
                onChange={e => handleInputChange(e, setFieldValue)}
              />
              <ErrorMessage component="span" name="comments" />
            </CommentWrapp>
          </FormInputWrappSecond>
          <ButtonsGroup>
            <ButtonAccent type="submit">Done</ButtonAccent>
            <ButtonWhite type="button" onClick={() => prev(setFieldValue)}>
              Back
            </ButtonWhite>
          </ButtonsGroup>
        </FormWrapp>
      )}
    </Formik>
  );
};

export default ModelPetStepTwo;
