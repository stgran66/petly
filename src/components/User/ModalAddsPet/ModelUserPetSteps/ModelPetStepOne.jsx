import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const RegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const birthdayRegExp =
  /^([0-2][0-9]|(3)[0-1])\.(((0)[0-9])|((1)[0-2]))\.\d{4}$/;

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
    .string()
    .matches(birthdayRegExp, 'birthday should be in dd.mm.yyyy format'),
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

const ModelPetStepOne = ({ data }) => {
  const handleFormSubmit = (values, { resetForm }) => {
    //   const { name, number } = values;
    //   if (contacts.some(contact => contact.name === name)) {
    //     return alert(`${name} is already in contacts.`);
    //   }
    //   dispatch(addContact({ name, number }));
    //   resetForm();
  };

  return (
    <Formik
      initialValues={data}
      validationSchema={schema}
      onSubmit={handleFormSubmit}
    >
      <Form>
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
            type="text"
            name="birthday"
            required
            placeholder="Type date of birth"
            id="birthday"
          />
          <ErrorMessage component="span" name="birthday" />

          <label htmlFor="birthday">Breed</label>
          <Field type="text" name="breed" placeholder="Type breed" id="breed" />
          <ErrorMessage component="span" name="breed" />
        </div>
        <div>
          <button type="submit">Next</button>
          <button type="submit">Camcel</button>
        </div>
      </Form>
    </Formik>
    // <>
    //   <h2>Hello One!</h2>
    // </>
  );
};

export default ModelPetStepOne;
