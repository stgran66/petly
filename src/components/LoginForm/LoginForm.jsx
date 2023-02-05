import { useFormik } from 'formik';
import Link from '@mui/material/Link';
import { Box, TextField, Grid, Button } from '@mui/material';

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
  });
  const handleSubmit = e => {
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
