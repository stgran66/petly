import AddNoticeButton from 'components/AddNoticeButton';
import NoticesCategoriesNav from 'components/notices/NoticesCategoriesNav';
import NoticesSearch from 'components/notices/NoticesSearch';
import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router';

const NoticesPage = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  return (
    <>
      <NoticesSearch />
      <NoticesCategoriesNav />
      <AddNoticeButton />
      <Suspense fallback={null}>
        <Outlet to={backLinkHref} />
      </Suspense>
    </>
  );
};

export default NoticesPage;
