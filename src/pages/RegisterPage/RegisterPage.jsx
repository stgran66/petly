import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from '@mui/material/Link';
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Grid,
  FormHelperText,
  Button,
} from '@mui/material';
import PersonalInfo from './PersonalInfo';
import AccountDetails from './AccountDetails';
import ReviewInfo from './ReviewInfo';

const steps = [' Account Details', 'Personal Info', 'Review and Submit'];

const Form = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleBack = () => {
    setActiveStep(prevStep => prevStep - 1);
  };
// const numberRegex =
//     /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      hidePassword: false,
      name: '',
      city: '',
      phone: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required('Email is required').email('Invalid email'),
      password: Yup.string().min(8),
      confirmPassword: Yup.string()
        .min(8)
        .oneOf([Yup.ref('password')], 'Passwords do not match'),
      // name: Yup.string().required('Name is required'),
      // city: Yup.string().required('City is required'),
      // phone: Yup
      //   .string()
      //   .matches(
      //     numberRegex,
      //     'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      //   )
      //   .required(),
    }),
    onSubmit: () => {
      if (activeStep === steps.length - 1) {
        console.log('last step');
      } else {
        setActiveStep(prevStep => prevStep + 1);
      }
    },
  });

  const formContent = step => {
    switch (step) {
      case 0:
        return <AccountDetails formik={formik} />;
      case 1:
        return <PersonalInfo formik={formik} />;
      case 2:
        return <ReviewInfo formik={formik} />;
      default:
        return <div>404: Not Found</div>;
    }
  };

  return (
    <Box
      sx={{
        maxWidth: '600px',
        padding: 2,
      }}
    >
      {/* <Stepper activeStep={activeStep} orientation="horizontal">
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper> */}
      <Grid container>
        <Grid item xs={12} sx={{ padding: '20px' }}>
          {formContent(activeStep)}
        </Grid>
        {formik.errors.submit && (
          <Grid item xs={12}>
            <FormHelperText error>{formik.errors.submit}</FormHelperText>
          </Grid>
        )}
        <Grid item xs={12}>
          {activeStep === 0 ? null : (
            <Button disabled={activeStep === 0} onClick={handleBack}>
              Back
            </Button>
          )}
          {activeStep === steps.length - 1 ? (
            <Button>Register</Button>
          ) : (
            <Button onClick={formik.handleSubmit}>Next</Button>
          )}
          <Grid item>
            <Link href="#" variant="body2">
              {'Already have an account? Login'}
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Form;

// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// // import FormControlLabel from '@mui/material/FormControlLabel';
// // import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// const theme = createTheme();

// export default function SignIn() {
//   const handleSubmit = event => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Registration
//           </Typography>
//           <Box
//             component="form"
//             onSubmit={handleSubmit}
//             noValidate
//             sx={{ mt: 1 }}
//           >
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="confirm-password"
//               label="Confirm Password"
//               type="password"
//               id="confirm-password"
//               autoComplete="current-password"
//             />
//             {/* <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Remember me"
//             /> */}
//             <Button
//               type="button"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Next
//             </Button>
//             <Grid container>
//               {/* <Grid item xs>
//                 <Link href="#" variant="body2">
//                   Forgot password?
//                 </Link>
//               </Grid> */}
//               <Grid item>
//                 <Link href="#" variant="body2">
//                   {"Already have an account? Login"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//       </Container>
//     </ThemeProvider>
//   );
// }
