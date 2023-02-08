import AddNoticeButton from 'components/notices/AddNoticeButton';
import NoticesCategoriesNav from 'components/notices/NoticesCategoriesNav';
import NoticesCategoryList from 'components/notices/NoticesCategoryList';
import NoticesSearch from 'components/notices/NoticesSearch';
import { Suspense } from 'react';
import { Outlet } from 'react-router';
import NoticesNavContainer from './NoticesPage.styled';

const NoticesPage = () => {
  return (
    <>
      <NoticesSearch />
      <NoticesNavContainer>
        <NoticesCategoriesNav />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <AddNoticeButton />
      </NoticesNavContainer>

      <NoticesCategoryList />
    </>
  );
};

export default NoticesPage;
