import { styled } from '@mui/system';

const ModalBackdrop = styled('div')`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  background: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  z-index: 1000;
`;
const ModalContent = styled('div')`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -25%);
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    transform: translate(-50%, -50%);
  }
`;
const styles = { ModalBackdrop, ModalContent };
export default styles;
