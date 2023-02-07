import React from 'react';
import { Grid} from '@mui/material';
import InputField from 'components/RegisterForm/FormFields';


const AddressForm = props => {
  const {
    formField: { email, password, confirmPassword },
  } = props;
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <InputField name={email.name} label={email.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={password.name} label={password.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={confirmPassword.name} label={confirmPassword.label} fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
export default AddressForm
