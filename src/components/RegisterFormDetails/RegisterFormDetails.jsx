import { Grid, TextField, FormHelperText } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';

import { IconButton } from '@mui/material';

const RegisterFormDetails = props => {
  const { formik } = props;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          type="email"
          fullWidth
          size="small"
          error={Boolean(formik.touched.email && formik.errors.email)}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="password"
          label="Password"
          variant="outlined"
          size="small"
          type={formik.hidePassword ? 'password' : 'input'}
          fullWidth
          error={Boolean(formik.touched.password && formik.errors.password)}
          onChange={formik.handleChange}
          value={formik.values.password}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  // onClick={handlePassVisibilty}
                  aria-label="toggle password"
                  edge="end"
                >
                  {formik.values.hidePassword ? (
                    <VisibilityIcon />
                  ) : (
                    <VisibilityOffIcon />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="confirmPassword"
          label="Confirm Password"
          variant="outlined"
          size="small"
          type="password"
          fullWidth
          error={Boolean(
            formik.touched.confirmPassword && formik.errors.confirmPassword
          )}
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  // onClick={handlePassVisibilty}
                  aria-label="toggle password"
                  edge="end"
                >
                  {formik.values.hidePassword ? (
                    <VisibilityIcon />
                  ) : (
                    <VisibilityOffIcon />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      {formik.errors.submit && (
        <Grid item xs={12}>
          <FormHelperText error>{formik.errors.submit}</FormHelperText>
        </Grid>
      )}
    </Grid>
  );
};

export default RegisterFormDetails;
