import React from 'react';
import { useFormikContext } from 'formik';
import {Grid } from '@mui/material';
import styles from './VerificationForm.styled';

const { Container, ItemList } = styles;

const VerificationForm = props => {
  const { values: formValues } = useFormikContext();
  const { email, name, city, phone } = formValues;
  return (
    <React.Fragment>
      <Container container spacing={3}>
        <Grid item container direction="column" xs={12}>
          <ItemList variant="h5" gutterBottom>
            Your verification details:
          </ItemList>
          <Grid container>
            <React.Fragment>
              <Grid item xs={12}>
                <ItemList gutterBottom>
                  <b>Email:</b>
                  {` ${email}`}
                </ItemList>
              </Grid>
              <Grid item xs={12}>
                <ItemList gutterBottom>
                  <b>Name:</b> {` ${name} `}
                </ItemList>
              </Grid>
            </React.Fragment>
            <React.Fragment>
              <Grid item xs={12}>
                <ItemList gutterBottom>
                  <b>City:</b>
                   {` ${city}`}
                </ItemList>
              </Grid>
            </React.Fragment>
            <React.Fragment>
              <Grid item xs={12}>
                <ItemList gutterBottom>
                  <b>Mobile phone:</b> {` ${phone}`}
                </ItemList>
              </Grid>
            </React.Fragment>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default VerificationForm;
