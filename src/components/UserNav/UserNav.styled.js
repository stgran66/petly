// import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import styled from 'styled-components';

const NavUser = styled('div')`
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    display: ${({ hiddenBlock }) => (hiddenBlock ? 'none' : 'block')};
    margin-left: auto;
    margin-right: 72px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 0;
  }
`;

const ButtonEl = styled(Button)(({ theme }) => ({
  // padding: '8px 36px',
  fontFamily: `${console.log(theme.fonts[0])}`,
  // fontWeight: 500,
  // fontSize: '14px',
  // lineHeight: '19px',
  // letterSpacing: '0.04em',
  // textTransform: 'inherit',

  // border: '2px solid #f59256',
  // color: '#fff',
  // backgroundColor: '#f59256',
  // borderRadius: '40px',
  // ':hover': {
  //   border: '2px solid #f59256',
  //   backgroundColor: '#f59256',
  //   color: '#fff',
  // },
}));

const styles = { NavUser, ButtonEl };
export default styles;
