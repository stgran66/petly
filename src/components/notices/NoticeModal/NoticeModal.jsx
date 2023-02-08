import React from 'react';
import style from './NoticeModal.styled';
import { ReactComponent as HeartIcon } from 'images/fav-icon.svg';
import ModalBtnClose from '../ModalBtnClose';

const NoticeModal = toggleModal => {
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
  return (
    <Container>
      <Wrapper>
        <ImgWrapper>
          <Img src={require('./DogModal.jpeg')} alt="dog" />
          <Category>sell/in good hands</Category>
        </ImgWrapper>
        <ListWrapper>
          <Title>Сute dog looking for a home</Title>
          <List>
            <Item>
              <ItemInfo>Name:</ItemInfo>
              <ItemInfo>Rich</ItemInfo>
            </Item>
            <Item>
              <ItemInfo>Birthtay:</ItemInfo>
              <ItemInfo>23.08.2021</ItemInfo>
            </Item>
            <Item>
              <ItemInfo>Breed:</ItemInfo>
              <ItemInfo>ItemInfoomeranian</ItemInfo>
            </Item>
            <Item>
              <ItemInfo>Location:</ItemInfo>
              <ItemInfo>Lviv</ItemInfo>
            </Item>
            <Item>
              <ItemInfo>The sex:</ItemInfo>
              <ItemInfo>male</ItemInfo>
            </Item>
            <Item>
              <ItemInfo>Email:</ItemInfo>
              <ItemInfo>user@gmail.com</ItemInfo>
            </Item>
            <Item>
              <ItemInfo>Pohone:</ItemInfo>
              <ItemInfo>+380993292345</ItemInfo>
            </Item>
            <Item>
              <ItemInfo>Sell:</ItemInfo>
              <ItemInfo>100$</ItemInfo>
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
      <ModalBtnClose toggleModal={toggleModal} />
    </Container>
  );
};

export default NoticeModal;
