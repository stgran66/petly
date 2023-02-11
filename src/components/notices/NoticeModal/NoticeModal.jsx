import React from 'react';
import style from './NoticeModal.styled';
import { useState } from 'react';
import useCategories from 'hooks/useCategories';
import { ReactComponent as HeartIcon } from 'images/fav-icon.svg';
import ModalBtnClose from '../ModalBtnClose';

const NoticeModal = ({ notice, category, toggleModal }) => {
  const [categoryName, setCategoryName] = useState('sell');
  useCategories(category, setCategoryName);
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
  const { title, name, birthday, breed, place, sex, email, phone, price } =
    notice;

  return (
    <Container>
      <Wrapper>
        <ImgWrapper>
          <Img src={require('./DogModal.jpeg')} alt="dog" />
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
                <ItemInfo>Sell:</ItemInfo>
                <ItemInfo>{price}</ItemInfo>
              </Item>
            ) : (
              ''
            )}
          </List>
        </ListWrapper>
      </Wrapper>
      <ItemInfo>
        <b>Comments:</b> Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quidem, rem vero delectus quibusdam tempora sapiente! Praesentium
        eaque consequuntur quas repellendus fuga sint officiis ea sed velit a
        quos, recusandae natus!
      </ItemInfo>
      <BtnWrapper>
        <ContactButton href={`tel: ${phone}`}>Contact</ContactButton>
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
