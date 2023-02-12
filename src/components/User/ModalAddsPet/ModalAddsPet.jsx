/* eslint-disable react-hooks/exhaustive-deps */
// import { useEffect } from 'react';
// import { createPortal } from 'react-dom';
import styles from './ModalAddsPet.styled';
const { ModalAddPetWrapp } = styles;

// const modalRoot = document.getElementById('modal-root');

const ModalAddsPet = () => {
  return <ModalAddPetWrapp>Hello ModalAddsPet</ModalAddPetWrapp>;

  // return createPortal(
  //   <OverlayModalUser onClick={handleBackdropClose}>
  //     <div>Hello ModalAddsPet</div>
  //   </OverlayModalUser>,
  //   modalRoot
  // );
};

export default ModalAddsPet;
