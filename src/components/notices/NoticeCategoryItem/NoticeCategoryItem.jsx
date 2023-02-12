import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useState } from 'react';
import Modal from 'components/notices/Modal';
import hooks from 'hooks';
import styles from './NoticeCategoryItem.styled';
import useCategories from 'hooks/useCategories';
// import operations from 'redux/notices/operations';

const NoticeCategoryItem = ({ notice, category }) => {
  const { isLoggedIn } = hooks.useAuth();
  const [addedToFav, setAddedToFav] = useState(false);
  const [categoryName, setCategoryName] = useState('sell');
  useCategories(category, setCategoryName);
  const { title, breed, place, age, price, _id } = notice;
  console.log(_id);
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
    Notify.init({
      position: 'right-top',
      distance: '8px',
    });
    !isLoggedIn
      ? Notify.info('Please authorize to access your account and add notice')
      : setAddedToFav(true);
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
