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
      .matches(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/)
      .required(`${email.requiredErrorMsg}`),
    [password.name]: Yup.string()
      .min(7)
      .max(32)
      .required(`${password.requiredErrorMsg}`),
    [confirmPassword.name]: Yup.string()
      .min(7)
      .max(32)
      .required(`${confirmPassword.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [name.name]: Yup.string().required(`${name.requiredErrorMsg}`),
    [city.name]: Yup.string(),
    [phone.name]: Yup.string()
      .min(13)
      .max(13)
      .matches('\\+?(?:\\s*\\d){12}\\s*')
      .required(`${phone.requiredErrorMsg}`),
  }),
];

export default validationSchema;
