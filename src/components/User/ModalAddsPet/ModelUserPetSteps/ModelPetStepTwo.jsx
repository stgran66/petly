import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const IMAGE_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

let schema = yup.object().shape({
  photo: yup
    .mixed()
    .required('Image is Required! Example: jpg,jpeg,png')
    .test(
      'fileFormat',
      'Unsupported file type',
      value => value === null || (value && IMAGE_FORMATS.includes(value.type))
    ),
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
      setFieldValue('avatar', fileImg);
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
        <Form autoComplete="on">
          <p>Add photo and some comments</p>
          <div>
            <div>
              {fileInput ? (
                <img
                  src={URL.createObjectURL(fileInput)}
                  alt={fileInput.name}
                />
              ) : (
                <button type="button">хрест</button>
              )}
              <input
                type="file"
                name="photo"
                accept=".jpg, .png, .jpeg"
                onChange={e => selectFile(e, setFieldValue)}
              />
              <ErrorMessage component="span" name="photo" />
            </div>

            <div>
              <label htmlFor="comments">Comments</label>
              <Field
                type="text"
                name="comments"
                required
                placeholder="Type comments"
                id="comments"
              />
              <ErrorMessage
                component="span"
                name="comments"
                onChange={e => handleInputChange(e, setFieldValue)}
              />
            </div>
          </div>
          <div>
            <button type="submit">Done</button>
            <button type="button" onClick={() => prev(setFieldValue)}>
              Back
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ModelPetStepTwo;

// {
//   /* <Label htmlFor="comments" lastMargin> */
// }
