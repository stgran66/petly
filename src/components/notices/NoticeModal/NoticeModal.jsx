import React from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import style from './NoticeModal.styled';
import { useState } from 'react';
import hooks from 'hooks';
import useCategories from 'hooks/useCategories';
import { ReactComponent as HeartIcon } from 'images/fav-icon.svg';
import ModalBtnClose from '../ModalBtnClose';
import { useDispatch } from 'react-redux';
import userOperations from 'redux/user/operations';

const { addFavNotice, removeFavNotice } = userOperations;

const NoticeModal = ({ notice, category, toggleModal, favorite, img }) => {
  const [categoryName, setCategoryName] = useState('sell');
  useCategories(category, setCategoryName);
  const { isLoggedIn } = hooks.useAuth();
  const dispatch = useDispatch();
  const [addedToFav, setAddedToFav] = useState(favorite);

  const {
    title,
    name,
    birthday,
    breed,
    place,
    sex,
    email,
    phone,
    price,
    _id,
    comments,
  } = notice;

  const handleSubmit = e => {
    Notify.init({
      position: 'right-top',
      distance: '8px',
    });

    if (!isLoggedIn) {
      Notify.info('Please authorize to access your account and add notice');
      return;
    }

    if (addedToFav) {
      dispatch(removeFavNotice(_id));
      setAddedToFav(false);
      return;
    }
    dispatch(addFavNotice(_id));
    setAddedToFav(true);
  };
  const {
    Container,
    Wrapper,
    ImgWrapper,
    Img,
    ListWrapper,
    Category,
    Title,
    List,
    Item,
    ItemInfo,
    BtnWrapper,
    ContactButton,
    ChangeFavoriteStatusBtn,
    ContLink,
  } = style;

  return (
    <Container>
      <Wrapper>
        <ImgWrapper>
          <Img src={img} alt="pet" />
          <Category>{categoryName}</Category>
        </ImgWrapper>
        <ListWrapper>
          <Title>{title}</Title>
          <List>
            <Item>
              <ItemInfo>Name:</ItemInfo>
              <ItemInfo>{name}</ItemInfo>
            </Item>
            <Item>
              <ItemInfo>Birthday:</ItemInfo>
              <ItemInfo>{birthday}</ItemInfo>
            </Item>
            <Item>
              <ItemInfo>Breed:</ItemInfo>
              <ItemInfo>{breed}</ItemInfo>
            </Item>
            <Item>
              <ItemInfo>Location:</ItemInfo>
              <ItemInfo>{place}</ItemInfo>
            </Item>
            <Item>
              <ItemInfo>The sex:</ItemInfo>
              <ItemInfo>{sex}</ItemInfo>
            </Item>
            <Item>
              <ItemInfo>Email:</ItemInfo>
              <ContLink href={`mailto: ${email}`}>
                {email ? email : '-------'}
              </ContLink>
            </Item>
            <Item>
              <ItemInfo>Phone:</ItemInfo>
              <ContLink href={`tel: ${phone}`}>
                {phone ? phone : '-------'}
              </ContLink>
            </Item>
            {category === 'sell' ? (
              <Item>
                <ItemInfo>Price:</ItemInfo>
                <ItemInfo>{price}</ItemInfo>
              </Item>
            ) : (
              ''
            )}
          </List>
        </ListWrapper>
      </Wrapper>
      <ItemInfo>
        <b>Comments:</b> {comments ? comments : '--------'}
      </ItemInfo>
      <BtnWrapper>
        <ContactButton href={`tel: ${phone}`}>Contact</ContactButton>
        {!isLoggedIn ? (
          <ChangeFavoriteStatusBtn type="button" onClick={handleSubmit}>
            Add to
            <HeartIcon />
          </ChangeFavoriteStatusBtn>
        ) : (
          <ChangeFavoriteStatusBtn type="button" onClick={handleSubmit}>
            {!addedToFav ? 'Add to' : 'Remove from'}
            <HeartIcon />
          </ChangeFavoriteStatusBtn>
        )}
      </BtnWrapper>
      <ModalBtnClose toggleModal={toggleModal} />
    </Container>
  );
};

export default NoticeModal;
