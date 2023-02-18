import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const NavUser = styled('div')`
  margin: 0 auto;
  margin-bottom: 60px;
  @media screen and (min-width: 768px) {
    display: ${({ hiddenBlock }) => (hiddenBlock ? 'none' : 'block')};
    margin-bottom: 0;
    margin-right: 90px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 60px;
  }
`;

const ButtonEl = styled(Button)(({ theme }) => ({
  padding: '8px 36px',
  fontFamily: theme.fonts[0],
  fontWeight: theme.fontWeights.medium,
  fontSize: theme.fontSizes.text.s,
  lineHeight: theme.lineHeights.m,
  textTransform: 'inherit',
  letterSpacing: '0.04em',
  color: theme.colors.white,
  border: 'none',
  borderRadius: '40px',
  backgroundColor: theme.colors.accent,

  ':hover': {
    backgroundColor: theme.colors.accent,
  },
  '& span': {
    marginRight: '0',
    '& svg': {
      width: '23px',
      height: '23px',
      marginRight: '12px',

      ' @media only screen and (min-width: 1280px)': {
        width: '28px',
        height: '28px',
      },
    },
  },
  '@media only screen and (min-width: 1280px)': {
    fontSize: '16px',
  },
  '@media only screen and (min-width: 768px)': {
    fontSize: theme.fontSizes.text.m,
  },
}));

const styles = { NavUser, ButtonEl };
export default styles;
