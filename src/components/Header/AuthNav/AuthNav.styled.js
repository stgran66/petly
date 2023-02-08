import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const ButtonEl = styled(Button)(({ theme }) => ({
  padding: '8px 28px',
  fontFamily: theme.fonts[0],
  fontWeight: theme.fontWeights.medium,
  fontSize: theme.fontSizes.text.s,
  lineHeight: theme.lineHeights.m,
  textTransform: 'inherit',
  letterSpacing: '0.04em',
  color: theme.colors.text,
  borderRadius: '40px',
  border: `2px solid ${theme.colors.accent}`,
  backgroundColor: 'transparent',

  ':hover': {
    border: `2px solid ${theme.colors.accent}`,
    color: theme.colors.white,
    backgroundColor: theme.colors.accent,
  },

  '@media only screen and (min-width: 768px)': {
    fontSize: theme.fontSizes.text.m,
  },
}));

const AuthBtns = styled('ul')`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  gap: 12px;
`;
const styles = {
  ButtonEl,
  AuthBtns,
};
export default styles;
