import checkoutFormModel from './checkoutFormModel';
const {
  formField: { email, password, confirmPassword, name, city, phone },
} = checkoutFormModel;


const formInitialValues = {
  [email.name]: '',
  [password.name]: '',
  [confirmPassword.name]: '',
  [name.name]: '',
  [city.name]: '',
  [phone.name]: '',
};

export default formInitialValues;