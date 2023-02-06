import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from '@mui/material/Link';
import { Box, Grid, FormHelperText, Button } from '@mui/material';

import RegisterFormDetails from 'components/RegisterFormDetails';
import RegisterFormInfo from 'components/RegisterFormInfo';
import RegisterFormReview from 'components/RegisterFormReview';



const steps = [' Account Details', 'Personal Info', 'Review and Submit'];

const RegisterForm = () => {
  const dispatch = useDispatch()
  // 
  const [activeStep, setActiveStep] = useState(0);

  const handleBack = () => {
    setActiveStep(prevStep => prevStep - 1);
  };

 const handleSubmitForm = e => {
   e.preventDefault();
   console.log('email', formik.values.email);
 };


  
  const numberRegex =
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      hidePassword: false,
      name: '',
      city: '',
      phone: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required('Email is required').email('Invalid email'),
      password: Yup.string().min(8),
      confirmPassword: Yup.string()
        .min(8)
        .oneOf([Yup.ref('password')], 'Passwords do not match'),
      name: Yup.string().required('Name is required'),
      city: Yup.string().required('City is required'),
      phone: Yup
        .string()
        .matches(
          numberRegex,
          'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
        )
        .required(),
    }),
    onSubmit: () => {
      if (activeStep === steps.length - 1) {
        console.log('last step');
      } else {
        setActiveStep(prevStep => prevStep + 1);
      }
    },
  });



  const formContent = step => {
    switch (step) {
      case 0:
        return <RegisterFormDetails formik={formik} />;
      case 1:
        return <RegisterFormInfo formik={formik} />;
      case 2:
        return <RegisterFormReview formik={formik} />;
      default:
        return <div>404: Not Found</div>;
    }
  };

  return (
    <Box
      sx={{
        maxWidth: '600px',
        padding: 2,
      }}
    >
      <Grid container>
        <Grid item xs={12} sx={{ padding: '20px' }}>
          {formContent(activeStep)}
        </Grid>
        {formik.errors.submit && (
          <Grid item xs={12}>
            <FormHelperText error>{formik.errors.submit}</FormHelperText>
          </Grid>
        )}
        <Grid item xs={12}>
          {activeStep === 0 ? null : (
            <Button disabled={activeStep === 0} onClick={handleBack}>
              Back
            </Button>
          )}
          {activeStep === steps.length - 1 ? (
            <Button onSubmit={handleSubmitForm}>Register</Button>
          ) : (
            <Button onClick={formik.handleSubmit}>Next</Button>
          )}
          <Grid item>
            <Link href="#"  variant="body2">
              Already have an account? Login
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RegisterForm;
