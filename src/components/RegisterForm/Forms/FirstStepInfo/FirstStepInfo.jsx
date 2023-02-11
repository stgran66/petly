import React from 'react';
import InputField from 'components/FormFields';
import styles from './FirstStepInfo.styled';
import { Grid } from '@mui/material';

const FirstStepInfo = props => {
  const {
    formField: { email, password, confirmPassword },
  } = props;
const {Container}= styles

  return (
    <React.Fragment>
      <Container>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <InputField
                name={email.name}
                label={email.label}
                type="email"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <InputField
                name={password.name}
                label={password.label}
                type="password"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <InputField
                name={confirmPassword.name}
                label={confirmPassword.label}
                type="password"
                fullWidth
              />
            </Grid>
          </Grid>
      </Container>
    </React.Fragment>
  );
};
export default FirstStepInfo;
