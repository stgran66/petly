import { ReactComponent as CloseIcon } from 'images/close-icon.svg';
import BtnClose from './ModalBtnClose.styled';

const ModalBtnClose = ({ toggleModal }) => {
  return (
    <BtnClose type="button" onClick={e => toggleModal()}>
      <CloseIcon />
    </BtnClose>
  );
};

export default ModalBtnClose;
