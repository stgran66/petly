import { ReactComponent as CloseIcon } from 'images/close-icon.svg';
import BtnClose from './ModalBtnClose.styled';
// import { useState } from 'react';

const ModalBtnClose = ({ toggleModal }) => {
  return (
    <BtnClose type="button" onClick={() => toggleModal()}>
      <CloseIcon />
    </BtnClose>
  );
};

export default ModalBtnClose;
