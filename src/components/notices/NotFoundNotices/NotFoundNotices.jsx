import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
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
  const location = useLocation();
  const dispatch = useDispatch();
  return (
    <NotFoundContainer>
      {favorite && (
        <>
          <NotFoundTitle>No favorites yet</NotFoundTitle>
          <NotFoundDesc>Add first pet to your favorites</NotFoundDesc>
          <Link to={`/notices/sell`} state={{ from: location }}>
            <NotFoundBtn
              onClick={() => {
                dispatch(setFilter(''));
              }}
              variant="contained"
              endIcon={<FavorIcon />}
            >
              Start exploring
            </NotFoundBtn>
          </Link>
        </>
      )}
      {category && (
        <>
          <NotFoundTitle>
            Sorry, we didn't find notices in this category
          </NotFoundTitle>
          <NotFoundDesc>Please specify your request</NotFoundDesc>
          <Link to={`/notices/sell`} state={{ from: location }}>
            <NotFoundBtn
              onClick={() => {
                dispatch(setFilter(''));
              }}
              variant="contained"
              endIcon={<FindIcon />}
            >
              Try again
            </NotFoundBtn>
          </Link>
        </>
      )}
      {myNotices && (
        <>
          <NotFoundTitle>You don't have any ads of your own yet</NotFoundTitle>
          <Link to={`/notices/sell`} state={{ from: location }}>
            <NotFoundBtn
              onClick={() => {
                dispatch(setFilter(''));
              }}
              variant="contained"
              endIcon={<TryIcon />}
            >
              Find your new friend
            </NotFoundBtn>
          </Link>
        </>
      )}
    </NotFoundContainer>
  );
};

export default NotFoundNotices;
