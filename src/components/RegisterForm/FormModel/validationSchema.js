import * as Yup from 'yup';
import checkoutFormModel from './checkoutFormModel';

const {
  formField: { email, password, confirmPassword, name, city, phone },
} = checkoutFormModel;

const validationSchema = [
  Yup.object().shape({
    [email.name]: Yup.string()
      .min(10)
      .max(63)
      .matches(
        /^(([a-zA-Z0-9]{1}[a-zA-Z0-9_\-.]{1,})@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5}))$/,
        `email can contain only latin letters, numbers and symbols . -  _ (dot, hyphen, underscore) and can't start from hyphen`
      )
      .required(`${email.requiredErrorMsg}`),
    [password.name]: Yup.string()
      .matches(
        /^[^ ]{7,32}$/,
        'password should be from 7 to 32 characters long, without spaces'
      )
      .required(`${password.requiredErrorMsg}`),
    [confirmPassword.name]: Yup.string()
      .min(7)
      .max(32)
      .required(`${confirmPassword.requiredErrorMsg}`)
      .oneOf([Yup.ref('password')], 'passwords does not match'),
  }),
  Yup.object().shape({
    [name.name]: Yup.string()
      .min(2)
      .max(16)
      .matches(
        /^[^ ][a-zA-zа-яіїєА-ЯІЇЄ ]+$/,
        `name can contain only Latin and Cyrillic characters and can't start from spaces`
      )
      .required(`${name.requiredErrorMsg}`),
    [city.name]: Yup.string()
      .min(2)
      .max(16)
      .matches(
        /^[^ -,][a-zA-zа-яіїєА-ЯІЇЄ, -]+[^ -]$/,
        `city can contain only Latin and Cyrillic characters, 2 - 19 symbols and can't start or end with spaces and hyphen`
      ),
    [phone.name]: Yup.string()
      .min(13)
      .max(13)
      // .matches(
      //   /^+380\d{3}\d{2}\d{2}\d{2}$/,
      //   `Phone number can contain only 13 symbols: starts from  '+380' and 9 digits after.`
      // )
      .required(`${phone.requiredErrorMsg}`),
  }),
];

export default validationSchema;
