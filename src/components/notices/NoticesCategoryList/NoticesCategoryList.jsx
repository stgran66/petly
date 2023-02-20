import styles from './NoticesCategoryList.styled';
import NoticeCategoryItem from 'components/notices/NoticeCategoryItem';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router';
import selectors from 'redux/notices/selectors';
import operations from 'redux/notices/operations';
import { useEffect, useState } from 'react';
import Loader from 'components/Loader';
import NotFound from '../NotFound';
import NotFoundNotices from '../NotFoundNotices/NotFoundNotices';
import hooks from 'hooks';
import { useSearchParams } from 'react-router-dom';

const { fetchNotices, getFavorite, getMyNotices } = operations;
const { List, ListItem, NoticesContainer, PaginationWrap } = styles;
const { selectFilteredList, selectLoadingStatus, selectErrorMessage, totalNotices } = selectors;

const NoticesCategoryList = () => {
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
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
  const pages = useSelector(totalNotices) / 12;
  const totalPages = Math.ceil(pages);

  const { isLoggedIn } = hooks.useAuth();

  useEffect(() => {
    setSearchParams(`?page=${page}&limit=12`);
  }, [setSearchParams, page, searchParams]);

  useEffect(() => {
    setPage(1);
  }, [category, favorite, myNotices]);

  useEffect(() => {
    const getUserData = async () => {
      if (favorite) {
        dispatch(getFavorite(page));
        return;
      }
      if (myNotices) {
        dispatch(getMyNotices(page));
        return;
      }
      await dispatch(fetchNotices({ category, page }));
    };
    getUserData();
  }, [dispatch, category, favorite, myNotices, isLoggedIn, page]);

  const onPagesChange = (e, value) => {
    setPage(value);
  };

  return (
    <NoticesContainer>
      {error && <NotFound />}
      {isLoading && <Loader />}
      {!isLoading &&
        !error &&
        (noNoticesFind ? (
          <NotFoundNotices searchOptions={searchOptions} />
        ) : (
          <>
            <List>
              {filteredNotices.map(notice => (
                <ListItem key={notice._id} data-aos="zoom-in">
                  <NoticeCategoryItem id={notice._id} notice={notice} category={category} />
                </ListItem>
              ))}
            </List>
            <PaginationWrap
              count={totalPages}
              page={page}
              variant="outlined"
              onChange={onPagesChange}
            />
          </>
        ))}
    </NoticesContainer>
  );
};

export default NoticesCategoryList;
