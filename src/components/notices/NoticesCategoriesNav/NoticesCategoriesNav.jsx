import { useLocation } from 'react-router-dom';
import styles from './NoticesCategoriesNav.styled';
const { CategoriesItem, CategoriesList, StyledLink } = styles;

const NoticesCategoriesNav = () => {
  const location = useLocation();

  return (
    <CategoriesList>
      <CategoriesItem>
        <StyledLink to={'lost-found'} state={{ from: location }}>
          lost/found
        </StyledLink>
      </CategoriesItem>
      <CategoriesItem>
        <StyledLink to={'for-free'} state={{ from: location }}>
          in good hands
        </StyledLink>
      </CategoriesItem>
      <CategoriesItem>
        <StyledLink to={'sell'} state={{ from: location }}>
          sell
        </StyledLink>
      </CategoriesItem>
    </CategoriesList>
  );
};

export default NoticesCategoriesNav;
