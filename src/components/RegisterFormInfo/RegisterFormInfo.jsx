import { TextField, Grid } from '@mui/material';
import React from 'react';
import { MuiTelInput} from 'mui-tel-input';

const RegisterFormInfo = props => {
  const { formik } = props;
     const [value, setValue] = React.useState('');

     const handleChange = newValue => {
       setValue(newValue);
  };


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
        <MuiTelInput
          name='phone'
          label="Phone"
          variant='outlined'
          fullWidth
          preferredCountries={['UA', 'GB', 'PL']}
          excludedCountries={['RU', 'BY']}
          focusOnSelectCountry
          value={value}
      
          onChange={handleChange}
        />
      </Grid>
    </Grid>
  );
};

export default RegisterFormInfo;
