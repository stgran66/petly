import React from 'react';
import style from './NoticeModal.styled';
import { ReactComponent as HeartIcon } from 'images/fav-icon.svg';
import ModalBtnClose from '../ModalBtnClose';

const NoticeModal = ({ notice }) => {
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
  } = style;
  const { title, name, birthday, breed, place, sex, email, phone, price } =
    notice;

  return (
    <Container>
      <Wrapper>
        <ImgWrapper>
          <Img src={require('./DogModal.jpeg')} alt="dog" />
          <Category>sell/in good hands</Category>
        </ImgWrapper>
        <ListWrapper>
          <Title>{title}</Title>
          <List>
            <Item>
              <ItemInfo>Name:</ItemInfo>
              <ItemInfo>{name}</ItemInfo>
            </Item>
            <Item>
              <ItemInfo>Birthtay:</ItemInfo>
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
              <ItemInfo>{email}</ItemInfo>
            </Item>
            <Item>
              <ItemInfo>Pohone:</ItemInfo>
              <ItemInfo>{phone}</ItemInfo>
            </Item>
            <Item>
              <ItemInfo>Sell:</ItemInfo>
              <ItemInfo>{price}$</ItemInfo>
            </Item>
          </List>
        </ListWrapper>
      </Wrapper>
      <ItemInfo>Comments</ItemInfo>
      <BtnWrapper>
        <ContactButton href="tel">Contact</ContactButton>
        <ChangeFavoriteStatusBtn type="button" onClick="#">
          {/* {!favorite ? 'Add to' : 'Remove from'} */}
          Add to
          <HeartIcon />
        </ChangeFavoriteStatusBtn>
      </BtnWrapper>
      <ModalBtnClose />
    </Container>
  );
};

export default NoticeModal;
