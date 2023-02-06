import { useEffect } from 'react';
import { Overlay } from './Modal.styled';
import NoticeModal from 'components/notices/NoticeCategoryItem';

const Modal = ({ children, toggleModal }) => {
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

  return <Overlay onClick={onBackdropClick}>{children}</Overlay>;
};

export default Modal;
