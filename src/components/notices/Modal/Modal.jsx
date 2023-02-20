import { useEffect } from 'react';
import Overlay from './Modal.styled';
import NoticeModal from 'components/notices/NoticeModal';

const Modal = ({ toggleModal, notice, category, favorite, img, toggleFavorite }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  function handleKeyDown(e) {
    if (e.code === 'Escape') {
      toggleModal();
    }
  }

  const onBackdropClick = e => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  return (
    <Overlay onClick={onBackdropClick}>
      <NoticeModal
        notice={notice}
        category={category}
        toggleModal={toggleModal}
        favorite={favorite}
        img={img}
        toggleFavorite={toggleFavorite}
      />
    </Overlay>
  );
};

export default Modal;
