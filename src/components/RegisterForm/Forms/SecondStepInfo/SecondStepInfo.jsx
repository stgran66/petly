import React from 'react';
import { Grid } from '@mui/material';
import InputField from 'components/FormFields';
import styles from './SecondStepInfo.styled';

const SecondStepInfo = props => {
  const {
    formField: { name, city, phone },
  } = props;
  const { Container } = styles

  return (
    <React.Fragment>
      <Container>
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
            <InputField
              id="tel"
              placeholder="+380"
              name={phone.name}
              label={phone.label}
              type="tel"
              fullWidth
            />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default SecondStepInfo;
