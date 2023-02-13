import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useState } from 'react';
import Modal from 'components/notices/Modal';
import hooks from 'hooks';
import styles from './NoticeCategoryItem.styled';
import useCategories from 'hooks/useCategories';
import operations from 'redux/notices/operations';
// import { useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';

// const { addFavNotice, removeFavNotice, getFavorite } = operations;
const { addFavNotice } = operations;

const NoticeCategoryItem = ({ notice, category }) => {
  const dispatch = useDispatch();
  const { isLoggedIn } = hooks.useAuth();
  const [addedToFav, setAddedToFav] = useState(false);
  const [categoryName, setCategoryName] = useState('sell');
  // const urlPath = useLocation();
  // const favoriteCategory = urlPath.pathname.includes('favorite');
  useCategories(category, setCategoryName);
  const { title, breed, place, age, price, _id } = notice;
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
    BtnDelete,
  } = styles;

  const [showModal, setShowModal] = useState(false);
  // const handleSubmit = e => {
  //   dispatch(addFavNotice(_id));
  // Notify.init({
  //   position: 'right-top',
  //   distance: '8px',
  // });
  // !isLoggedIn
  //   ? Notify.info('Please authorize to access your account and add notice')
  //   : setAddedToFav(true);
  // };

  const handleSubmit = e => {
    if (!isLoggedIn) {
      Notify.info('Please authorize to access your account and add notice');
      return;
    }
    // setIsFavourite(!setAddedToFav);
    // if (!addedToFav) {
    //   dispatch(removeFavNotice(_id));
    // } else {
    dispatch(addFavNotice(_id));
    setAddedToFav(true);
  };

  return (
    <NoticeItemCard>
      <ImgWrapper>
        <Category>{categoryName}</Category>
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
          {category === 'sell' ? (
            <>
              <Content Content> Price:</Content>
              <Content>{price}</Content>
            </>
          ) : (
            ''
          )}
        </AboutList>
        <LearnMore type="button" onClick={() => setShowModal(true)}>
          Learn more
        </LearnMore>
        {addedToFav ? (
          <BtnDelete type="button" onClick={() => setAddedToFav(false)}>
            Delete
          </BtnDelete>
        ) : (
          ''
        )}
      </About>
      {showModal && (
        <Modal
          toggleModal={() => setShowModal(s => !s)}
          notice={notice}
          category={category}
          favorite={addedToFav}
        ></Modal>
      )}
    </NoticeItemCard>
  );
};

export default NoticeCategoryItem;
