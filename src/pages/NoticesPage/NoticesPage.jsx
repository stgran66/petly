import AddNoticeButton from 'components/notices/AddNoticeButton';
import NoticesCategoriesNav from 'components/notices/NoticesCategoriesNav';
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
        <AddNoticeButton />
      </NoticesNavContainer>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default NoticesPage;
