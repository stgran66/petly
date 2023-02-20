import React from 'react';
import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import InputField from 'components/FormFields';
import { Grid, InputAdornment } from '@mui/material';

import IconButton from '@mui/material/IconButton';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

import { useTheme } from '@mui/material/styles';
import styles from './LoginForm.styled';

import { useDispatch } from 'react-redux';
import operations from '../../redux/auth/operations';

const { login } = operations;

const formInitialValues = {
  email: '',
  password: '',
};

const currentValidationSchema = Yup.object().shape({
  email: Yup.string()
    .min(10)
    .max(63)
    .matches(
      /^(([a-zA-Z0-9]{1}[a-zA-Z0-9_\-.]{1,})@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5}))$/,
      `contain only latin letters, numbers and symbols.`
    ),
  password: Yup.string().matches(/^[^ ]{7,32}$/, 'password should be from 7 to 32'),
});

const LoginForm = () => {
  const theme = useTheme();
  const [hidePassword, setHidePassword] = useState(true);

  const showPassword = () => {
    setHidePassword(prevState => !prevState);
  };

  const dispatch = useDispatch();
  const { Title, Buttons, AccountRedirect, LinkRegisterRoute, LoginForm, Container, InputStyling } =
    styles;

  const handleSubmit = values => {
    const { email, password } = values;

    dispatch(
      login({
        email: email,
        password: password,
      })
    );
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
          <Grid container>
            <InputStyling>
              <InputField type="email" name="email" label="Email" fullWidth />
            </InputStyling>
            <InputStyling>
              <InputField
                type={hidePassword ? 'password' : 'input'}
                name="password"
                label="Password"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        style={{ color: `${theme.colors.text}` }}
                        aria-label="toggle password visibility"
                        onClick={showPassword}
                      >
                        {hidePassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </InputStyling>
          </Grid>
          <Buttons type="submit">Login</Buttons>
        </Container>

        <AccountRedirect>
          Don`t have an account?
          <LinkRegisterRoute to="/register"> Register</LinkRegisterRoute>
        </AccountRedirect>
      </LoginForm>
    </Formik>
  );
};

export default LoginForm;
