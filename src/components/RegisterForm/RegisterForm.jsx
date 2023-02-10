import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import { Formik, Form } from 'formik';

import AddressForm from './Forms/AddressForm';
import PaymentForm from './Forms/PaymentForm';
import ReviewOrder from './Forms/ReviewOrder';

import validationSchema from './FormModel/validationSchema';
import checkoutFormModel from './FormModel/checkoutFormModel';
import formInitialValues from './FormModel/formInitialValues';

import { useDispatch } from 'react-redux';
import operations from '../../redux/auth/operations';
import { Link } from 'react-router-dom';
import Loader from 'components/Loader';
const { register } = operations;


const steps = ['Shipping address', 'Payment details', 'Review your order'];
const { formId, formField } = checkoutFormModel;

function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm formField={formField} />;
    case 1:
      return <PaymentForm formField={formField} />;
    case 2:
      return <ReviewOrder formField={formField} />;
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

  const _submitForm = (values, actions) => {
    const { email, password, name, city, phone } = values;

    dispatch(
      register({
        email: email,
        password: password,
        name: name,
        city: city,
        phone: phone.trim(),
      })
    );
    setActiveLoader(true);
    // actions.setSubmitting(false);
    // setActiveStep(activeStep + 1);
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
    <React.Fragment>
      <Typography component="h2" variant="h4" align="center">
        Registration
      </Typography>
      <React.Fragment>
        <Formik
          initialValues={formInitialValues}
          validationSchema={currentValidationSchema}
          onSubmit={_handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form id={formId}>
              {_renderStepContent(activeStep)}
              {activeLoader ? (
                <Loader></Loader>
              ) : (
                <div>
                  {activeStep !== 0 && (
                    <Button onClick={_handleBack}>Back</Button>
                  )}
                  <div>
                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      variant="contained"
                      color="primary"
                    >
                      {isLastStep ? 'Place order' : 'Next'}
                    </Button>
                    <p>
                      Already have an account?<Link to="/login">Login</Link>
                    </p>
                  </div>
                </div>
              )}
            </Form>
          )}
        </Formik>
      </React.Fragment>
    </React.Fragment>
  );
};

export default RegisterForm;
