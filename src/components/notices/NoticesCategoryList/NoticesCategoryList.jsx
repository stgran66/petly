import styles from './NoticesCategoryList.styled';
import NoticeCategoryItem from 'components/notices/NoticeCategoryItem';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import selectors from 'redux/notices/selectors';
import operations from 'redux/notices/operations';
import { useEffect } from 'react';
import Loader from 'components/Loader';
import NotFound from '../NotFound';

const { fetchNotices } = operations;
const { List, ListItem, NotFoundMessage, NoticesContainer } = styles;
const { selectFilteredList, selectLoadingStatus, selectErrorMessage } =
  selectors;

const NoticesCategoryList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoadingStatus);
  const error = useSelector(selectErrorMessage);
  const filteredNotices = useSelector(selectFilteredList);
  const { category } = useParams();

  const noNoticesFind = filteredNotices.length === 0;

  useEffect(() => {
    dispatch(fetchNotices(category));
  }, [dispatch, category]);

  return (
    <NoticesContainer>
      {error && <NotFound />}
      {isLoading && <Loader />}
      {!isLoading && !error && (
        <List>
          {noNoticesFind ? (
            <NotFoundMessage>We didn't find pets</NotFoundMessage>
          ) : (
            filteredNotices.map(notice => (
              <ListItem key={notice._id}>
                <NoticeCategoryItem notice={notice} />
              </ListItem>
            ))
          )}
        </List>
      )}
    </NoticesContainer>
  );
};

export default NoticesCategoryList;
