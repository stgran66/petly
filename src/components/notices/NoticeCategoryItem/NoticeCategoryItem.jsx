import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useState } from 'react';
import Modal from 'components/notices/Modal';
import hooks from 'hooks';
import styles from './NoticeCategoryItem.styled';
import useCategories from 'hooks/useCategories';
import userOperations from 'redux/user/operations';
import { useDispatch, useSelector } from 'react-redux';
import userSelectors from 'redux/user/selectors';
import operations from 'redux/notices/operations';
import { useLocation } from 'react-router-dom';

const { deleteNotice, getFavorite, getMyNotices, fetchNotices } = operations;
const { addFavNotice, removeFavNotice } = userOperations;

const NoticeCategoryItem = ({ notice, category }) => {
  const dispatch = useDispatch();
  const { selectUserFavorites, selectUserId } = userSelectors;
  const favoriteNotices = useSelector(selectUserFavorites);
  const userId = useSelector(selectUserId);
  const { title, breed, place, age, price, _id, imageUrl, name, owner } =
    notice;
  const { isLoggedIn } = hooks.useAuth();
  const [addedToFav, setAddedToFav] = useState(() => {
    return favoriteNotices.includes(_id) ? true : false;
  });
  const [categoryName, setCategoryName] = useState('');
  const urlPath = useLocation();
  const favorite = urlPath.pathname.includes('favorite');
  const myNotices = urlPath.pathname.includes('own');

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

  const handleDelete = () => {
    const getNoticesAfterDelete = async () => {
      await dispatch(deleteNotice(_id));
      if (favorite) {
        dispatch(getFavorite());
        return;
      }
      if (myNotices) {
        dispatch(getMyNotices());
        return;
      }
      dispatch(fetchNotices(category));
    };
    getNoticesAfterDelete();
  };

  return (
    <NoticeItemCard>
      <ImgWrapper>
        <Category>{categoryName}</Category>
        <Image src={imageUrl} alt={name} />
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
        {userId === owner ? (
          <BtnDelete type="button" onClick={handleDelete}>
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
