import { TextField } from '@mui/material';
import { styled } from '@mui/system';

const Input = styled(TextField)(({ theme }) => ({
  fontFamily: theme.fonts[0],
  fontWeight: theme.fontWeights.normal,
  fontSize: theme.fontSizes.text.s,
  lineHeight: theme.lineHeights.xs,

  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: '1px solid rgba(245, 146, 86, 0.5)',
      borderRadius: '40px',
    },
    '&.Mui-focused fieldset': {
      // borderColor: '#FF6101',
      borderWidth: '2px',
    },
  },
}));

const styles = { Input };

export default styles;