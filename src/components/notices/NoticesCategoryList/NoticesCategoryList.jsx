import styles from './NoticesCategoryList.styled';
import NoticeCategoryItem from 'components/notices/NoticeCategoryItem';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router';
import selectors from 'redux/notices/selectors';
import operations from 'redux/notices/operations';
import { useEffect } from 'react';
import Loader from 'components/Loader';
import NotFound from '../NotFound';
import NotFoundNotices from '../NotFoundNotices/NotFoundNotices';

const { fetchNotices, getFavorite, getMyNotices } = operations;
const { List, ListItem, NoticesContainer } = styles;
const { selectFilteredList, selectLoadingStatus, selectErrorMessage } =
  selectors;

const NoticesCategoryList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoadingStatus);
  const error = useSelector(selectErrorMessage);
  const filteredNotices = useSelector(selectFilteredList);
  const { category } = useParams();
  const urlPath = useLocation();
  const favorite = urlPath.pathname.includes('favorite');
  const myNotices = urlPath.pathname.includes('own');

  const noNoticesFind = filteredNotices.length === 0;
  const searchOptions = { favorite, myNotices, category };

  // console.log(dispatch(getFavorite()));

  useEffect(() => {
    if (favorite) {
      dispatch(getFavorite());
      return;
    }
    if (myNotices) {
      dispatch(getMyNotices());
      return;
    }
    dispatch(fetchNotices(category));
  }, [dispatch, category, favorite, myNotices]);

  return (
    <NoticesContainer>
      {error && <NotFound />}
      {isLoading && <Loader />}
      {!isLoading &&
        !error &&
        (noNoticesFind ? (
          <NotFoundNotices searchOptions={searchOptions} />
        ) : (
          <List>
            {filteredNotices.map(notice => (
              <ListItem key={notice._id}>
                <NoticeCategoryItem
                  id={notice._id}
                  notice={notice}
                  category={category}
                />
              </ListItem>
            ))}
          </List>
        ))}
    </NoticesContainer>
  );
};

export default NoticesCategoryList;
