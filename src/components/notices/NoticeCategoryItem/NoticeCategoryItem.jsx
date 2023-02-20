import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Highlighter from 'react-highlight-words';
import selectors from 'redux/notices/selectors';

import hooks from 'hooks';
import styles from './NoticeCategoryItem.styled';
import userOperations from 'redux/user/operations';
import userSelectors from 'redux/user/selectors';
import operations from 'redux/notices/operations';
import calcAge from 'utils/calcAge';
import adaptCategoryName from 'utils/adaptCategoryNames';

import Modal from 'components/Modal';
import NoticeModal from '../NoticeModal';

const { deleteNotice, getFavorite, getMyNotices, fetchNotices } = operations;
const { addFavNotice, removeFavNotice } = userOperations;

const NoticeCategoryItem = ({ notice }) => {
  const queryParameters = new URLSearchParams(window.location.search);
  const page = queryParameters.get('page');

  const dispatch = useDispatch();
  const { selectUserFavorites, selectUserId } = userSelectors;
  const favoriteNotices = useSelector(selectUserFavorites);
  const userId = useSelector(selectUserId);
  const { title, breed, place, birthday, price, _id, imageUrl, name, owner, category } = notice;
  const { isLoggedIn } = hooks.useAuth();
  const [addedToFav, setAddedToFav] = useState(() => {
    return favoriteNotices.includes(_id) ? true : false;
  });
  const urlPath = useLocation();
  const favorite = urlPath.pathname.includes('favorite');
  const myNotices = urlPath.pathname.includes('own');
  const { selectFilter } = selectors;
  const filterValue = useSelector(selectFilter);
  const searchValue = filterValue.toLowerCase().split(', ');

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
  if (showModal) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'visible';
  }
    const toggleModal = () => {
      setShowModal(s => !s);
      if (favorite) {
        dispatch(getFavorite());
        return;
      }
    };

  const handleFavoriteToggle = () => {
    if (!isLoggedIn) {
      Notify.info('Please authorize to access your account and add notice');
      return;
    }
    const removeFavorite = async () => {
      setAddedToFav(false);
      await dispatch(removeFavNotice(_id));
      if (favorite) {
        dispatch(getFavorite());
        return;
      }
    };
    if (addedToFav) {
      removeFavorite();
      return;
    }
    dispatch(addFavNotice(_id));
    setAddedToFav(true);
  };

  const handleDelete = () => {
    const getNoticesAfterDelete = async () => {
      await dispatch(deleteNotice(_id));
      if (favorite) {
        dispatch(getFavorite(page));
        return;
      }
      if (myNotices) {
        dispatch(getMyNotices(page));
        return;
      }
      dispatch(fetchNotices({ category, page }));
    };
    getNoticesAfterDelete();
  };

  return (
    <NoticeItemCard>
      <ImgWrapper>
        <Category>{adaptCategoryName(category)}</Category>
        <Image src={imageUrl} alt={name} />
        <Button type="button" onClick={handleFavoriteToggle}>
          {addedToFav ? <AddedToFav /> : <FavouriteIcon />}
        </Button>
      </ImgWrapper>
      <ItemTitle>
        <Highlighter
          highlightClassName="YourHighlightClass"
          searchWords={searchValue}
          autoEscape={true}
          textToHighlight={title}
          highlightStyle={{ backgroundColor: '#f57c00' }}
        />
      </ItemTitle>
      <About>
        <AboutList>
          <Content>Breed:</Content>
          <Content>{breed}</Content>
          <Content>Place:</Content>
          <Content>{place}</Content>
          <Content>Age:</Content>
          <Content>{calcAge(birthday)}</Content>
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
        <Modal close={toggleModal}>
          <NoticeModal
            notice={notice}
            category={category}
            favorite={favorite}
            img={imageUrl}
          />
        </Modal>
      )}
    </NoticeItemCard>
  );
};

export default NoticeCategoryItem;
