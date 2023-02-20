import ModalBtnClose from 'components/Modal/ModalBtnClose';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.styled'

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, close }) => {

  const  { ModalBackdrop, ModalContent } =styles
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  function handleKeyDown(e) {
    if (e.code === 'Escape') {
      close();
    }
  }

  const handleModalClick = e => {
    console.log('e.target: ', e.target);
    console.log('e.currentTarget: ', e.currentTarget);

    if (e.currentTarget === e.target) {
      close();
    }
  };

  return createPortal(
    <ModalBackdrop onClick={handleModalClick}>
      <ModalContent>
        <ModalBtnClose toggleModal={() => close()} />
        {children}
      </ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
};
export default Modal;
