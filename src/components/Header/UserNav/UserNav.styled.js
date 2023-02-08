import { styled } from '@mui/material/styles';
// import styled from 'styled-components';
import Button from '@mui/material/Button';

const NavUser = styled('div')`
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    display: ${({ hiddenBlock }) => (hiddenBlock ? 'none' : 'block')};
    margin-left: auto;
    margin-right: 60px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 0;
  }
`;

const ButtonEl = styled(Button)`
  padding: 8px 36px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  text-transform: inherit;
  letter-spacing: 0.04em;

  border: none;
  color: #fff;
  background-color: #f59256;
  border-radius: 40px;

  :hover {
    border: none;
    color: #fff;
    background-color: #f59256;
  }
  & span {
    margin-right: 12px;
    margin-left: 0;
    & svg {
      @media (min-width: 768px) {
        width: 23px;
        height: 23px;
      }
      @media (min-width: 1280px) {
        width: 28px;
        height: 28px;
      }
    }
  }
  @media (min-width: 1280px) {
    font-size: 16px;
  }
`;

// const ButtonEl = styled('button')(({ theme }) => ({
//   padding: '8px 28px',
//   fontFamily: theme.fonts[0],
//   fontWeight: theme.fontWeights.medium,
//   fontSize: theme.fontSizes.text.s,
//   lineHeight: theme.lineHeights.m,
//   textTransform: 'inherit',
//   letterSpacing: '0.04em',
//   color: theme.colors.white,
//   border: 'none',
//   borderRadius: '40px',
//   backgroundColor: theme.colors.accent,
// }));

const styles = { NavUser, ButtonEl };
export default styles;
