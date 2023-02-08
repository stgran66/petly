// import { Link } from 'react-router-dom';
import { useState } from 'react';
import NoticeModal from 'components/notices/NoticeCategoryItem';
import Modal from 'components/notices/Modal';

import styles from './NoticeCategoryItem.styled';
// const NoticeCategoryItem = ({ title }) => {
//   return <Link to={`notices`}>{title}</Link>;
// };

const NoticeCategoryItem = ({ notice }) => {
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
  } = styles;
  const [showModal, setShowModal] = useState(false);
  // console.log(id);
  return (
    <NoticeItemCard>
      <ImgWrapper>
        <Category>sell/in good hands</Category>
        <Image src={require('./Dog.jpeg')} alt="Dog" />
        <Button>
          <FavouriteIcon />
        </Button>
      </ImgWrapper>
      <ItemTitle>Сute dog looking for a home</ItemTitle>
      <About>
        <AboutList>
          <Content>Breed:</Content>
          <Content>Husky</Content>
          <Content>Place:</Content>
          <Content>New York</Content>
          <Content>Age:</Content>
          <Content>one year</Content>
        </AboutList>
        <LearnMore type="button" onClick={() => setShowModal(true)}>
          Learn more
        </LearnMore>
      </About>
      {showModal && (
        <Modal toggleModal={() => setShowModal(s => !s)}>
          <NoticeModal toggleModal={() => setShowModal(s => !s)} />
          {/* <ModalBtnClose /> */}
        </Modal>
      )}
    </NoticeItemCard>
  );
};

export default NoticeCategoryItem;
