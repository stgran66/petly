/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
// import { createPortal } from 'react-dom';
import styles from './ModalUser.styled';
const { OverlayModalUser } = styles;

// const modalRoot = document.getElementById('modal-root');

const ModalUser = ({ setShowModal, children }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        setShowModal(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleBackdropClose = e => {
    if (e.currentTarget === e.target) {
      setShowModal(false);
    }
  };

  return (
    <OverlayModalUser onClick={handleBackdropClose}>
      <div>{children}</div>
      {/* <div>Hello ModalAddsPet</div> */}
    </OverlayModalUser>
  );

  // return createPortal(
  //   <OverlayModalUser onClick={handleBackdropClose}>
  //     <div>Hello ModalAddsPet</div>
  //   </OverlayModalUser>,
  //   modalRoot
  // );
};

export default ModalUser;
