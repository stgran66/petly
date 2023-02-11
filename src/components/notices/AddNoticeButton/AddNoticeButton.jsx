import styles from './AddNoticeButton.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import AddNoticeModal from '../AddNoticeModal';
import { useState } from 'react';
import hooks from 'hooks';
const { AddIcon, BtnInfo, AddButton } = styles;

const AddNoticeButton = () => {
  const { isLoggedIn } = hooks.useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = e => {
    Notify.init({
      position: 'right-top',
      distance: '8px',
    });

    !isLoggedIn
      ? Notify.info('Please authorize to access your account and add notice')
      : setIsModalOpen(true);
  };

  return isModalOpen ? (
    <>
      <AddNoticeModal setIsModalOpen={setIsModalOpen} />
    </>
  ) : (
    <AddButton type="button" onClick={handleSubmit}>
      <AddIcon />
      <BtnInfo>Add pet</BtnInfo>
    </AddButton>
  );
};

export default AddNoticeButton;
