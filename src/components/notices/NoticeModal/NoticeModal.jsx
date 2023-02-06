import React from 'react';

import {
  Container,
  Wrapper,
  ImgWrapper,
  Img,
  Category,
  Title,
  List,
  Item,
  ItemInfo,
} from './NoticeModal.styled';

const NoticeModal = () => {
  return (
    <Container>
      <Wrapper>
        <ImgWrapper>
          <Img src={require('./DogModal.jpeg')} alt="dog" />
          <Category>sell/in good hands</Category>
        </ImgWrapper>
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
      </Wrapper>
      <ItemInfo>Comments</ItemInfo>
    </Container>
  );
};

export default NoticeModal;
