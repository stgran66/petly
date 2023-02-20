import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

import styles from './Model.Steps.styled';

import { parse, isDate } from 'date-fns';

const {
  FormWrapp,
  FormInputWrapp,
  ButtonsGroup,
  ButtonAccent,
  ButtonWhite,
  LabelWrapp,
  InputValue,
  ErrorMsg,
} = styles;

const RegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

let schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .min(2)
    .max(16)
    .matches(RegExp, 'Name may contain only letters, dashes and spaces')
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
});

const ModelPetStepOne = ({ data, next, onClose }) => {
  const handleFormSubmit = values => {
    next({ ...values }, false);
  };

  return (
    <Formik initialValues={data} validationSchema={schema} onSubmit={handleFormSubmit}>
      <FormWrapp>
        <FormInputWrapp>
          <LabelWrapp>
            <label htmlFor="name">Name pet</label>
            <InputValue type="text" name="name" required placeholder="Type name pet" id="name" />
            {/* <ErrorMessage component="span" name="name" /> */}
            <ErrorMessage name="name">{msg => <ErrorMsg>{msg}</ErrorMsg>}</ErrorMessage>
          </LabelWrapp>

          <LabelWrapp>
            <label htmlFor="birthday">Date of birth</label>
            <InputValue name="birthday" required placeholder="Type date of birth" id="birthday" />
            {/* <ErrorMessage component="span" name="birthday" /> */}
            <ErrorMessage name="birthday">{msg => <ErrorMsg>{msg}</ErrorMsg>}</ErrorMessage>
          </LabelWrapp>

          <LabelWrapp>
            <label htmlFor="breed">Breed</label>
            <InputValue required type="text" name="breed" placeholder="Type breed" id="breed" />
            {/* <ErrorMessage component="span" name="breed" /> */}
            <ErrorMessage name="breed">{msg => <ErrorMsg>{msg}</ErrorMsg>}</ErrorMessage>
          </LabelWrapp>
        </FormInputWrapp>
        <ButtonsGroup>
          <ButtonAccent type="submit">Next</ButtonAccent>
          <ButtonWhite type="button" onClick={() => onClose()}>
            Cancel
          </ButtonWhite>
        </ButtonsGroup>
      </FormWrapp>
    </Formik>
  );
};

export default ModelPetStepOne;
