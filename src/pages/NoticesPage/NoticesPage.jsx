import AddNoticeButton from 'components/AddNoticeButton';
import NoticesCategoriesNav from 'components/notices/NoticesCategoriesNav';
import NoticesCategoryList from 'components/notices/NoticesCategoryList';
import NoticesSearch from 'components/notices/NoticesSearch';

const NoticesPage = () => {
  return (
    <>
      <NoticesSearch />
      <NoticesCategoriesNav />
      <AddNoticeButton />
      <NoticesCategoryList />
    </>
  );
};

export default NoticesPage;
