import { styled } from '@mui/system';

const ModalBackdrop = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 100px;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);
  overflow-y: scroll;
  z-index: 2;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;
const Modal = styled('div')`
  padding: 40px 20px;
  position: relative;
  min-height: 813px;

  background: ${({ theme }) => theme.colors.white});

  border-radius: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-left: 80px;
    padding-right: 80px;
  }
`;
const ModalTitle = styled('title')``;
const ModalInfo = styled('p')``;
const ModalForm = styled('form')``;
const InputLabel = styled('label')``;
const Input = styled('input')``;
const ModalBtn = styled('button')``;

const styles = {
  ModalBackdrop,
  Modal,
  ModalTitle,
  ModalInfo,
  ModalForm,
  InputLabel,
  Input,
  ModalBtn,
};
export default styles;
