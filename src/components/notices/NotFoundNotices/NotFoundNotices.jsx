import HeartImg from '../../../images/heart-icon.svg';
import AddNoticeButton from '../AddNoticeButton';
import styles from './NotFoundNotices.styled';
const {
  NotFoundImg,
  NotFoundContainer,
  NotFoundTitle,
  NotFoundDesc,
  NotFoundBtn,
} = styles;
const NotFoundNotices = ({
  searchOptions: { favorite, myNotices, category },
}) => {
  return (
    <NotFoundContainer>
      {category && (
        <>
          <NotFoundImg src={HeartImg} alt="page_not_found" />;
          <NotFoundTitle>No favorites yet</NotFoundTitle>
          <NotFoundDesc>
            Like a pet you see? Save it here to your favorites
          </NotFoundDesc>
          <NotFoundBtn>Start exploring</NotFoundBtn>
        </>
      )}
      {favorite && (
        <>
          <NotFoundTitle>
            Sorry, we didn't find what you are looking for
          </NotFoundTitle>
          <NotFoundBtn>Please try again</NotFoundBtn>
        </>
      )}
      {myNotices && (
        <>
          <NotFoundTitle>You don't have any ads of your own yet</NotFoundTitle>
          <AddNoticeButton />
        </>
      )}
    </NotFoundContainer>
  );
};

export default NotFoundNotices;
