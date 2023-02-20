import React from 'react';
import { useState } from 'react';
import InputField from 'components/FormFields';
import styles from './FirstStepInfo.styled';
import { Grid, InputAdornment } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useTheme } from '@mui/material/styles';

const FirstStepInfo = props => {
    const theme = useTheme();
  const [hidePassword, setHidePassword] = useState(true);

  const showPassword = () => {
    setHidePassword(prevState =>!prevState);
  };

  const {
    formField: { email, password, confirmPassword },
  } = props;
const {Container, InputStyling}= styles

  return (
    <React.Fragment>
      <Container>
          <Grid container>
            <InputStyling>
              <InputField name={email.name} label={email.label} type="email" fullWidth />
            </InputStyling>
            <InputStyling>
              <InputField
                name={password.name}
                label={password.label}
                type={hidePassword ? 'password' : 'input'}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        style={{ color: `${theme.colors.text}` }}
                        aria-label="toggle password visibility"
                        onClick={showPassword}
                      >
                        {hidePassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </InputStyling>
            <InputStyling>
              <InputField
                name={confirmPassword.name}
                label={confirmPassword.label}
                type={hidePassword ? 'password' : 'input'}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        style={{ color: `${theme.colors.text}` }}
                        aria-label="toggle password visibility"
                        onClick={showPassword}
                      >
                        {hidePassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </InputStyling>
          </Grid>
      </Container>
    </React.Fragment>
  );
};
export default FirstStepInfo;
