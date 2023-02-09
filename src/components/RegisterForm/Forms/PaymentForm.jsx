import React from 'react';
import { Grid } from '@mui/material';
import InputField from 'components/FormFields';

const PaymentForm = props => {
  const {
    formField: { name, city, phone },
  } = props;

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <InputField
            name={name.name}
            label={name.label}
            type="text"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField
            name={city.name}
            label={city.label}
            type="text"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField name={phone.name} label={phone.label} type="tel" fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PaymentForm;
