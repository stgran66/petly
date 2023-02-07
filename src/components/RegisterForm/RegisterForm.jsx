import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import { Formik, Form } from 'formik';

import AddressForm from './Forms/AddressForm';
import PaymentForm from './Forms/PaymentForm';
import ReviewOrder from './Forms/ReviewOrder';

import validationSchema from './FormModel/validationSchema';
import checkoutFormModel from './FormModel/checkoutFormModel';
import formInitialValues from './FormModel/formInitialValues';
//
import { useDispatch } from 'react-redux';
import register from '../../redux/auth/operations';

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
      return <div>Not Found</div>;
  }
}

const RegisterForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;
  const dispatch = useDispatch();

  // Start our problem
  const _submitForm = (values, actions) => {
    // alert show our props
    // alert(JSON.stringify(values, null, 2));

    const { email, password, name, city, phone } = values;

    dispatch(
      register({
        email: email,
        password: password,
        name: name,
        city: city,
        phone: phone,
      })
    );
    actions.setSubmitting(false);
    setActiveStep(activeStep + 1);
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
  // -------------END

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

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
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </React.Fragment>
    </React.Fragment>
  );
};

export default RegisterForm;
