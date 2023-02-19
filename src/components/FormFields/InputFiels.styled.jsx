import { TextField } from '@mui/material';
import { styled } from '@mui/system';

const Input = styled(TextField)(({ theme }) => ({
  // root: {
  //   '& .MuiInputBase-root': {
  //     color: 'white',
  //   },
  // },
//   '&textfield':{
//     // background-color: #000;
//     color: "green",
// },
  '& label.Mui-focused': {
    color: theme.colors.text,
    border: `1px solid ${theme.colors.white}`,
  },

  '& fieldset': {
    fontFamily: theme.fonts[0],
    fontWeight: theme.fontWeights.normal,
    fontSize: theme.fontSizes.text.s,
    lineHeight: theme.lineHeights.xs,
    border: `1px solid ${theme.colors.accent}`,
    borderRadius: '40px',
  },
  '&:hover fieldset': {
    border: `1px solid ${theme.colors.white}`,
  },
  '&.Mui-focused fieldset': {
    borderWidth: '2px',
    backgroundColor: 'white',
  },
}));

const styles = { Input };

export default styles;