import { useFormik } from 'formik';
// import * as Yup from 'yup';
import Link from '@mui/material/Link';
import { Box, TextField, Grid, Button } from '@mui/material';

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    // validationSchema: Yup.object().shape({
    //   email: Yup.string().required('Email is required').email('Invalid email'),
    //   password: Yup.string().min(8),
    //   confirmPassword: Yup.string()
    //     .min(8)
    //     .oneOf([Yup.ref('password')], 'Passwords do not match'),
    //   firstName: Yup.string().required('First Name is required'),
    //   lastName: Yup.string().required('Last Name is required'),
    // }),
  });
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget.elements;
    const formReset = e.currentTarget;

    // dispatch
    console.log(form.email.value);

    // formReset.reset();
  };

  return (
    <Box
      sx={{
        maxWidth: '600px',
        padding: 2,
      }}
    >
      <Grid container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              type="email"
              fullWidth
              size="small"
              error={Boolean(formik.touched.email && formik.errors.email)}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="password"
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              size="small"
              error={Boolean(formik.touched.password && formik.errors.password)}
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </Grid>

          <Button type="submit" onClick={handleSubmit}>Login</Button>

          <Grid item>
            <Link href="#" variant="body2">
              {'Don`t have an account? Register'}
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginForm;
