import React from 'react';
import { Grid } from '@mui/material';
import InputField from 'components/FormFields';
import styles from './SecondStepInfo.styled';

const SecondStepInfo = props => {
  const {
    formField: { name, city, phone },
  } = props;
  const { Container, InputStyling } = styles;

  return (
    <React.Fragment>
      <Container>
        <Grid container>
          <InputStyling>
            <InputField name={name.name} label={name.label} type="text" fullWidth />
          </InputStyling>
          <InputStyling>
            <InputField name={city.name} label={city.label} type="text" fullWidth />
          </InputStyling>
          <InputStyling>
            <InputField
              id="tel"
              placeholder="+380"
              name={phone.name}
              label={phone.label}
              type="tel"
              fullWidth
            />
          </InputStyling>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default SecondStepInfo;
