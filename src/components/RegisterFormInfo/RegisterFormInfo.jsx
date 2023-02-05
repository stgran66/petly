import { TextField, Grid } from '@mui/material';

const RegisterFormInfo = props => {
  const { formik } = props;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          name="name"
          label="Name"
          variant="outlined"
          size="small"
          type="text"
          fullWidth
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="city"
          label="City, region"
          variant="outlined"
          type="text"
          fullWidth
          size="small"
          value={formik.values.city}
          onChange={formik.handleChange}
          error={formik.touched.city && Boolean(formik.errors.city)}
          helperText={formik.touched.city && formik.errors.city}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="phone"
          label="Mobile phone"
          variant="outlined"
          type="tel"
          fullWidth
          size="small"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
        />
      </Grid>
    </Grid>
  );
};

export default RegisterFormInfo;
