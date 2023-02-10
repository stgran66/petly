import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useState } from 'react';
import NoticeModal from 'components/notices/NoticeCategoryItem';
import Modal from 'components/notices/Modal';
import hooks from 'hooks';
import styles from './NoticeCategoryItem.styled';
// import { useDispatch, useSelector } from 'react-redux';

// const { selectFilteredList, selectLoadingStatus, selectErrorMessage } =
//   selectors;
const NoticeCategoryItem = ({ notice }) => {
  const { isLoggedIn } = hooks.useAuth();
  const [addedToFav, setAddedToFav] = useState(false);
  const { title, breed, place, age } = notice;
  const {
    NoticeItemCard,
    Image,
    ImgWrapper,
    Category,
    Button,
    ItemTitle,
    About,
    AboutList,
    Content,
    LearnMore,
    FavouriteIcon,
    AddedToFav,
  } = styles;
  const [showModal, setShowModal] = useState(false);
  const handleSubmit = e => {
    Notify.init({
      position: 'right-top',
      distance: '8px',
    });

    !isLoggedIn
      ? Notify.info('Please authorize to access your account and add notice')
      : setAddedToFav(true);
  };
  console.log(addedToFav);
  return (
    <NoticeItemCard>
      <ImgWrapper>
        <Category>sell/in good hands</Category>
        <Image src={require('./Dog.jpeg')} alt="Dog" />
        <Button type="button" onClick={handleSubmit}>
          {addedToFav ? <AddedToFav /> : <FavouriteIcon />}
        </Button>
      </ImgWrapper>
      <ItemTitle>{title}</ItemTitle>
      <About>
        <AboutList>
          <Content>Breed:</Content>
          <Content>{breed}</Content>
          <Content>Place:</Content>
          <Content>{place}</Content>
          <Content>Age:</Content>
          <Content>{age}</Content>
        </AboutList>
        <LearnMore type="button" onClick={() => setShowModal(true)}>
          Learn more
        </LearnMore>
      </About>
      {showModal && (
        <Modal toggleModal={() => setShowModal(s => !s)} notice={notice}>
          <NoticeModal />
          {/* <ModalBtnClose /> */}
        </Modal>
      )}
    </NoticeItemCard>
  );
};

export default NoticeCategoryItem;
