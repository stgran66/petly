import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import InputField from 'components/FormFields';
import { Grid } from '@mui/material';
import styles from './LoginForm.styled';

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
  const {
    Title,
    Buttons,
    AccountRedirect,
    LinkRegisterRoute,
    LoginForm,
    Container,
  } = styles;

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
    <Formik
      initialValues={formInitialValues}
      validationSchema={currentValidationSchema}
      onSubmit={handleSubmit}
    >
      <LoginForm>
        <Title>Login</Title>

        <Container>
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
        </Container>

        <Buttons type="submit" sx={{padding:0}}>Login</Buttons>
        <AccountRedirect>
          Don`t have an account?
          <LinkRegisterRoute to="/register"> Register</LinkRegisterRoute>
        </AccountRedirect>
      </LoginForm>
    </Formik>
  );
};

export default LoginForm;
