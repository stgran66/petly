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
        `contain only latin letters, numbers and symbols.`
      )
      .required(`${email.requiredErrorMsg}`),
    [password.name]: Yup.string()
      .matches(/^[^ ]{7,32}$/, 'password should be from 7 to 32')
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
        /^[a-zA-zа-яіїєА-ЯІЇЄ]+(-| |')?[a-zA-zа-яіїєА-ЯІЇЄ']+(-| )?[a-zA-zа-яіїєА-ЯІЇЄ']*$/,
        `contain only Latin and Cyrillic characters`
      )
      .required(`${name.requiredErrorMsg}`),
    [city.name]: Yup.string()
      .min(3)
      .max(19)
      .matches(
        /^[a-zA-zа-яіїєА-ЯІЇЄ]+(-| |')?[a-zA-zа-яіїєА-ЯІЇЄ']+(-| )?[a-zA-zа-яіїєА-ЯІЇЄ']*$/,
        `contain only Latin and Cyrillic characters, 3-19 symbols`
      ),
    [phone.name]: Yup.string()
      .min(13)
      .max(13)
      .matches(/^[+]380\d{3}\d{2}\d{2}\d{2}$/, `contain 13 symbols, '+380' and 9 digits after.`)
      .required(`${phone.requiredErrorMsg}`),
  }),
];

export default validationSchema;
