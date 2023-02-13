import React from 'react';
import { useState } from 'react';
import InputField from 'components/FormFields';
import styles from './FirstStepInfo.styled';
import { Grid, InputAdornment } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

const FirstStepInfo = props => {
  const [hidePassword, setHidePassword] = useState(true);

  const showPassword = () => {
    setHidePassword(prevState =>!prevState);
  };

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
              type={hidePassword ? 'password' : 'input'}
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={showPassword}
                    >
                      {hidePassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <InputField
              name={confirmPassword.name}
              label={confirmPassword.label}
              type={hidePassword ? 'password' : 'input'}
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={showPassword}
                    >
                      {hidePassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
export default FirstStepInfo;
