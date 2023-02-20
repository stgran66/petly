import ModalBtnClose from '../Modal/ModalBtnClose';
import NoticeModal from '../NoticeModal';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ notice, category, favorite, img, toggleFavorite, close }) => {
  const { ModalBackdrop, ModalContent } = styles;
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
    if (e.currentTarget === e.target) {
      close();
    }
  };

  return createPortal(
    <ModalBackdrop onClick={handleModalClick}>
      <ModalContent>
        <ModalBtnClose toggleModal={() => close()} />
        <NoticeModal
          notice={notice}
          category={category}
          favorite={favorite}
          img={img}
          toggleFavorite={toggleFavorite}
        />
      </ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
};
export default Modal;
