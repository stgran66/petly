import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { parse, isDate } from 'date-fns';
// import getCurrent from './ValidationData';

const today = new Date();

const RegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

let schema = yup.object().shape({
  name: yup
    .string()
    .min(2)
    .max(16)
    .matches(
      RegExp,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  birthday: yup
    .date()
    .test('len', 'Must be exactly DD.MM.YYYY', (_, { originalValue }) => {
      if (originalValue) {
        return originalValue.length === 10;
      }
    })
    .transform(function (_, originalValue) {
      const result = isDate(originalValue)
        ? originalValue
        : parse(originalValue, 'dd.MM.yyyy', new Date());

      return result;
    })
    .min('01.01.1950', 'Date is too early')
    .max(today),
  breed: yup
    .string()
    .min(2)
    .max(16)
    .matches(
      RegExp,
      'Breed may contain only letters, apostrophe, dash and spaces.'
    )
    .required(),
});

const ModelPetStepOne = ({ data, next, onClose }) => {
  const handleFormSubmit = values => {
    next({ ...values }, false);
  };

  return (
    <Formik
      initialValues={data}
      validationSchema={schema}
      onSubmit={handleFormSubmit}
    >
      <Form autoComplete="on">
        <div>
          <label htmlFor="name">Name pet</label>
          <Field
            type="text"
            name="name"
            required
            placeholder="Type name pet"
            id="name"
          />
          <ErrorMessage component="span" name="name" />

          <label htmlFor="birthday">Date of birth</label>
          <Field
            name="birthday"
            required
            placeholder="Type date of birth"
            id="birthday"
          />
          <ErrorMessage component="span" name="birthday" />

          <label htmlFor="breed">Breed</label>
          <Field type="text" name="breed" placeholder="Type breed" id="breed" />
          <ErrorMessage component="span" name="breed" />
        </div>
        <div>
          <button type="submit">Next</button>
          <button type="button" onClick={() => onClose()}>
            Cancel
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ModelPetStepOne;
