import { styled } from '@mui/system';

const OverlayModalUser = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1200;
  width: 100vw;
  height: 100vh;
  padding: 160px 20px;

  background: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);
  overflow-y: scroll;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    /* padding: 267px 0; */
    padding: 267px 80px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    /* padding: 99px 0; */
    padding: 99px 351px;
  }
`;
const styles = { OverlayModalUser };

export default styles;
