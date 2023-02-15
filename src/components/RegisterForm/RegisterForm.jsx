import React, { useState } from 'react';
import { Formik } from 'formik';

import FirstStepInfo from './Forms/FirstStepInfo';
import SecondStepInfo from './Forms/SecondStepInfo';
import VerificationForm from './Forms/VerificationForm';

import validationSchema from './FormModel/validationSchema';
import checkoutFormModel from './FormModel/checkoutFormModel';
import formInitialValues from './FormModel/formInitialValues';

import { useDispatch } from 'react-redux';
import operations from '../../redux/auth/operations';
import Loader from 'components/Loader';

import styles from './RegisterForm.styled';
const { register } = operations;

const steps = ['Shipping address', 'Payment details', 'Review your order'];
const { formId, formField } = checkoutFormModel;

function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <FirstStepInfo formField={formField} />;
    case 1:
      return <SecondStepInfo formField={formField} />;
    case 2:
      return <VerificationForm formField={formField} />;
    default:
      return;
  }
}

const RegisterForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [activeLoader, setActiveLoader] = useState(false);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;
  const dispatch = useDispatch();

  const { Title, LinkLoginRoute, Buttons, RegisterForm, AccountRedirect } =
    styles;

  const _submitForm = values => {
    const { email, password, name, city, phone } = values;
    const ifCityNoString = city === '' ? 'unknown' : city

    dispatch(
      register({
        email: email.toLowerCase().trim(),
        password: password.toLowerCase().trim(),
        name: name.toLowerCase().trim(),
        city: ifCityNoString.toLowerCase().trim(),
        phone: phone.toLowerCase().trim(),
      })
    );
    setActiveLoader(true);
    setTimeout(() => {
      setActiveStep(0);
      setActiveLoader(false)
    }, 3000);
  };

  const _handleSubmit = (values, actions) => {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  const _handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Formik
      initialValues={formInitialValues}
      validationSchema={currentValidationSchema}
      onSubmit={_handleSubmit}
    >
      {({ isSubmitting }) => (
        <RegisterForm id={formId}>
          <Title>Registration</Title>
          {_renderStepContent(activeStep)}
          {activeLoader ? (
            <Loader></Loader>
          ) : (
            <div>
              <div>
                <Buttons type="submit">
                  {isLastStep ? 'Register' : 'Next'}
                </Buttons>
                {activeStep !== 0 && (
                  <Buttons onClick={_handleBack} style={{ marginTop: 16 }}>
                    Back
                  </Buttons>
                )}
                <AccountRedirect>
                  Already have an account?
                  <LinkLoginRoute to="/login"> Login</LinkLoginRoute>
                </AccountRedirect>
              </div>
            </div>
          )}
        </RegisterForm>
      )}
    </Formik>
  );
};

export default RegisterForm;
