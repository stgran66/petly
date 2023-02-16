import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/notices/filterSlice';
import styles from './NotFoundNotices.styled';

const {
  NotFoundContainer,
  NotFoundTitle,
  NotFoundDesc,
  NotFoundBtn,
  FavorIcon,
  TryIcon,
  FindIcon,
} = styles;
const NotFoundNotices = ({
  searchOptions: { favorite, myNotices, category },
}) => {
  const dispatch = useDispatch();
  return (
    <NotFoundContainer>
      {favorite && (
        <>
          <NotFoundTitle>No favorites yet</NotFoundTitle>
          <NotFoundDesc>Add first pet to your favorites</NotFoundDesc>
          <NotFoundBtn
            onClick={() => {
              dispatch(setFilter(''));
            }}
            variant="contained"
            endIcon={<FavorIcon />}
          >
            Start exploring
          </NotFoundBtn>
        </>
      )}
      {category && (
        <>
          <NotFoundTitle>
            Sorry, we didn't find notices in this category
          </NotFoundTitle>
          <NotFoundDesc>Please specify your request</NotFoundDesc>

          <NotFoundBtn
            onClick={() => {
              dispatch(setFilter(''));
            }}
            variant="contained"
            endIcon={<FindIcon />}
          >
            Try again
          </NotFoundBtn>
        </>
      )}
      {myNotices && (
        <>
          <NotFoundTitle>You don't have any ads of your own yet</NotFoundTitle>

          <NotFoundBtn
            onClick={() => {
              dispatch(setFilter(''));
            }}
            variant="contained"
            endIcon={<TryIcon />}
          >
            Find your new friend
          </NotFoundBtn>
        </>
      )}
    </NotFoundContainer>
  );
};

export default NotFoundNotices;
