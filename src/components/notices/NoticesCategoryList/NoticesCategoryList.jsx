import styles from './NoticesCategoryList.styled';
import NoticeCategoryItem from 'components/notices/NoticeCategoryItem';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import selectors from 'redux/notices/selectors';

const { List, ListItem, NotFoundMessage } = styles;
const { selectFilteredList } = selectors;

const NoticesCategoryList = () => {
  const filteredNotices = useSelector(selectFilteredList);
  const { category } = useParams();
  const filterByCategory = (category, list) => {
    return list.filter(notice => notice.category.includes(category));
  };
  const filteredByCategoryList = filterByCategory(category, filteredNotices);
  const noNoticesFind = filteredByCategoryList.length === 0;

  return (
    <List>
      {noNoticesFind ? (
        <NotFoundMessage>We didn't find pets</NotFoundMessage>
      ) : (
        filteredByCategoryList.map(({ id, title }) => (
          <ListItem key={id}>
            <NoticeCategoryItem id={id} title={title} />
          </ListItem>
        ))
      )}
    </List>
  );
};

export default NoticesCategoryList;
