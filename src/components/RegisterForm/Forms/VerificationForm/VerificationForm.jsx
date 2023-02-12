import React from 'react';
import { useFormikContext } from 'formik';
import { Typography, Grid } from '@mui/material';


const VerificationForm = props => {
  const { values: formValues } = useFormikContext();
  const { email, name, city, phone } = formValues;
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item container direction="column" xs={12}>
          <Typography variant="h6" gutterBottom>
            User details:
          </Typography>
          <Grid container>
            <React.Fragment>
              <Grid item xs={12}>
                <Typography gutterBottom>Email:{` ${email}`}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom>
                  Name: {` ${name} `} 
                </Typography>
              </Grid>
            </React.Fragment>
            <React.Fragment>
              <Grid item xs={12}>
                <Typography gutterBottom>City: {` ${city}`}</Typography>
              </Grid>
            </React.Fragment>
            <React.Fragment>
              <Grid item xs={12}>
                <Typography gutterBottom>
                  Mobile phone: {` ${phone}`}
                </Typography>
              </Grid>
            </React.Fragment>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default VerificationForm;
