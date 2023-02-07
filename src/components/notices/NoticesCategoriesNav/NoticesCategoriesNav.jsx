import { useLocation } from 'react-router-dom';
import styles from './NoticesCategoriesNav.styled';
const { CategoriesItem, CategoriesList, StyledLink } = styles;

const NoticesCategoriesNav = () => {
  const location = useLocation();

  return (
    <CategoriesList>
      <CategoriesItem>
        <StyledLink to={'/notices/lost-found'} state={{ from: location }}>
          lost/found
        </StyledLink>
      </CategoriesItem>
      <CategoriesItem>
        <StyledLink to={'/notices/for-free'} state={{ from: location }}>
          in good hands
        </StyledLink>
      </CategoriesItem>
      <CategoriesItem>
        <StyledLink to={'/notices/sell'} state={{ from: location }}>
          sell
        </StyledLink>
      </CategoriesItem>
    </CategoriesList>
  );
};

export default NoticesCategoriesNav;
