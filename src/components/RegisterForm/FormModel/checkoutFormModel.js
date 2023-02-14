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
      requiredErrorMsg: 'Name is required',
    },
    city: {
      name: 'city',
      label: 'City',
      requiredErrorMsg: 'City is required',
      defaultValue: 'unknown'
    },
    phone: {
      name: 'phone',
      label: 'Mobile phone',
      requiredErrorMsg: 'Phone is required',
    },
  },
};

export default checkoutFormModel;
