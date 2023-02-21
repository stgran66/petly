import styles from './NoticesCategoryList.styled';
import NoticeCategoryItem from 'components/notices/NoticeCategoryItem';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router';
import selectors from 'redux/notices/selectors';
import operations from 'redux/notices/operations';
import { useCallback, useEffect, useState } from 'react';
import Loader from 'components/Loader';
import NotFound from '../NotFound';
import NotFoundNotices from '../NotFoundNotices/NotFoundNotices';
import hooks from 'hooks';
import { useSearchParams } from 'react-router-dom';
import { setFilter, setQueryValue } from 'redux/notices/filterSlice';

const { fetchNotices, getFavorite, getMyNotices } = operations;
const { List, ListItem, NoticesContainer, PaginationWrap } = styles;
const { selectQueryFilter, selectNotices, selectLoadingStatus, selectErrorMessage, totalNotices } =
  selectors;

const NoticesCategoryList = () => {
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoadingStatus);
  const error = useSelector(selectErrorMessage);
  const noticesList = useSelector(selectNotices);
  const { category } = useParams();
  const urlPath = useLocation();
  const favorite = urlPath.pathname.includes('favorite');
  const myNotices = urlPath.pathname.includes('own');
  const queryValue = useSelector(selectQueryFilter);
  const noNoticesFind = noticesList.length === 0;
  const searchOptions = { favorite, myNotices, category };
  const pages = useSelector(totalNotices) / 12;
  const totalPages = Math.ceil(pages);

  const { isLoggedIn } = hooks.useAuth();

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 90, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    dispatch(setFilter(''));
    dispatch(setQueryValue(''));
    setPage(1);
  }, [category, favorite, myNotices, dispatch]);

  useEffect(() => {
    setPage(1);
  }, [queryValue]);

  useEffect(() => {
    if (queryValue === '') {
      setSearchParams({
        page,
        limit: 12,
      });
      return;
    }
    if (queryValue) {
      return setSearchParams({
        query: queryValue,
        page,
        limit: 12,
      });
    }
  }, [setSearchParams, page, searchParams, queryValue]);

  useEffect(() => {
    const getUserData = async () => {
      if (favorite) {
        dispatch(getFavorite({ page, query: queryValue }));
        return;
      }
      if (myNotices) {
        dispatch(getMyNotices({ page, query: queryValue }));
        return;
      }
      await dispatch(fetchNotices({ category, page, query: queryValue }));
    };
    getUserData();
  }, [dispatch, category, favorite, myNotices, isLoggedIn, page, queryValue, searchParams]);

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
              {noticesList.map(notice => (
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
              onClick={scrollToTop}
            />
          </>
        ))}
    </NoticesContainer>
  );
};

export default NoticesCategoryList;
