import AddNoticeButton from 'components/notices/AddNoticeButton';
import NoticesCategoriesNav from 'components/notices/NoticesCategoriesNav';
import NoticesSearch from 'components/notices/NoticesSearch';
import { Suspense } from 'react';
import { Outlet } from 'react-router';
import styles from './NoticesPage.styled';

const { NoticesSection, NoticesNavContainer } = styles;
const NoticesPage = () => {
  return (
    <NoticesSection>
      <NoticesSearch />
      <NoticesNavContainer>
        <NoticesCategoriesNav />
        <AddNoticeButton />
      </NoticesNavContainer>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </NoticesSection>
  );
};

export default NoticesPage;
