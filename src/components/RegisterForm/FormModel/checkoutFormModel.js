const checkoutFormModel = {
  formId: 'checkoutForm',
  formField: {
    email: {
      name: 'email',
      label: 'Email*',
      requiredErrorMsg: 'Email is required',
    },
    password: {
      name: 'password',
      label: 'Password*',
      requiredErrorMsg: 'Password is required',
    },
    confirmPassword: {
      name: 'confirmPassword',
      label: 'ConfirmPassword*',
      requiredErrorMsg: 'ConfirmPassword is required',
    },
    name: {
      name: 'name',
      label: 'Name',
    },
    city: {
      name: 'city',
      label: 'City',
      requiredErrorMsg: 'State/Region',
    },
    phone: {
      name: 'phone',
      label: 'Mobile phone',
    },
  },
};

export default checkoutFormModel;
