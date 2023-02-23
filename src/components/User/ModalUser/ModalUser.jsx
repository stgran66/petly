/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import styles from './ModalUser.styled';
const { OverlayModalUser } = styles;

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
    </OverlayModalUser>
  );
};

export default ModalUser;
