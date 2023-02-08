import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Grid } from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import InputField from 'components/FormFields';

import { useDispatch } from 'react-redux';
import operations from '../../redux/auth/operations';

const { login } = operations;

const formInitialValues = {
  email: '',
  password: '',
};

const currentValidationSchema = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().min(7).max(32).required(),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const { email, password } = values;

    dispatch(
      login({
        email: email,
        password: password,
      })
    );
    resetForm();
  };

  return (
    <React.Fragment>
      <Typography component="h2" variant="h4" align="center">
        Login
      </Typography>
      <React.Fragment>
        <Formik
          initialValues={formInitialValues}
          validationSchema={currentValidationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <InputField type="email" name="email" label="Email" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <InputField
                  type="password"
                  name="password"
                  label="Password"
                  fullWidth
                />
              </Grid>
            </Grid>
            <Button type="submit" variant="contained" color="primary">
              Login
            </Button>
            <p>
              Don`t have an account?<Link to="/register">Register</Link>
            </p>
          </Form>
        </Formik>
      </React.Fragment>
    </React.Fragment>
  );
};

export default LoginForm;
