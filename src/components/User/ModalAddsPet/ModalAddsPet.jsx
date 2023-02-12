/* eslint-disable react-hooks/exhaustive-deps */
// import { useEffect } from 'react';
// import { createPortal } from 'react-dom';
import styles from './ModalAddsPet.styled';
const { ModalAddPetWrapp, ModalTitle, ModalCloseButton, ModalCloseIcon } =
  styles;

// const modalRoot = document.getElementById('modal-root');

const ModalAddsPet = ({ setShowModal }) => {
  const onClose = () => {
    setShowModal(false);
  };
  return (
    <ModalAddPetWrapp>
      <ModalTitle>Add pet</ModalTitle>
      <ModalCloseButton tupe="button" onClick={e => onClose(e)}>
        <ModalCloseIcon />
      </ModalCloseButton>
    </ModalAddPetWrapp>
  );

  // return createPortal(
  //   <OverlayModalUser onClick={handleBackdropClose}>
  //     <div>Hello ModalAddsPet</div>
  //   </OverlayModalUser>,
  //   modalRoot
  // );
};

export default ModalAddsPet;
