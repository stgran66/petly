import { useSelector } from 'react-redux';
import styles from './AddNoticeButton.styled';
import select from 'redux/auth/selectors';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import AddNoticeModal from '../AddNoticeModal';
import { useState } from 'react';
const { selectIsLoggedIn } = select;
const { AddIcon, BtnInfo, AddButton } = styles;

const AddNoticeButton = () => {
  const { isLoggedIn } = useSelector(selectIsLoggedIn);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = e => {
    Notify.init({
      position: 'right-top',
      distance: '8px',
    });

    isLoggedIn
      ? Notify.info('Please authorize to access your account and add notice')
      : setIsModalOpen(true);
  };

  return isModalOpen ? (
    <AddNoticeModal />
  ) : (
    <AddButton type="button" onClick={handleSubmit}>
      <AddIcon />
      <BtnInfo>Add pet</BtnInfo>
    </AddButton>
  );
};

export default AddNoticeButton;
