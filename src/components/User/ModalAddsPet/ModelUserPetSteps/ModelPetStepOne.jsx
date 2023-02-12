import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import getCurrent from './ValidationData';

const RegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const birthdayRegExp =
  /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

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
  birthday: yup.date(),
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
            type="date"
            max={getCurrent()}
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

// -----------------------------------------

// const birthdayRegExp =
//   /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

// birthday: yup
//     .string()
//     .matches(birthdayRegExp, 'Birthday should be in dd.mm.yyyy format')
//     .test(
//       'is-date-valid',
//       () => `Future date not allowed`,
//       value => {
//         if (value) {
//           let date = value.split('.');
//           const corectFormat = new Date(`${date[2]}/${date[1]}/${date[0]}`);
//           return corectFormat.getTime() < Date.now();
//         }
//         return true;
//       }
//     ),
