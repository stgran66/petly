import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useState } from 'react';
import Modal from 'components/notices/Modal';
import hooks from 'hooks';
import styles from './NoticeCategoryItem.styled';
import useCategories from 'hooks/useCategories';
import userOperations from 'redux/user/operations';
// import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
import userSelectors from 'redux/user/selectors';

// const { addFavNotice, removeFavNotice, getFavorite } = operations;
const { addFavNotice, removeFavNotice } = userOperations;

const NoticeCategoryItem = ({ notice, category }) => {
  const dispatch = useDispatch();
  const { selectUserFavorites } = userSelectors;
  const favoriteNotices = useSelector(selectUserFavorites);
  const { title, breed, place, age, price, _id } = notice;

  const { isLoggedIn } = hooks.useAuth();
  const [addedToFav, setAddedToFav] = useState(() => {
    return favoriteNotices.includes(_id) ? true : false;
  });
  const [categoryName, setCategoryName] = useState('sell');
  // const urlPath = useLocation();
  // const favoriteCategory = urlPath.pathname.includes('favorite');
  useCategories(category, setCategoryName);
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
    if (addedToFav) {
      dispatch(removeFavNotice(_id));
      setAddedToFav(false);
      return;
    }
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
