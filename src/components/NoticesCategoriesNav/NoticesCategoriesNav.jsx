import { useLocation } from 'react-router-dom';
import {
  CategoriesItem,
  CategoriesList,
  StyledLink,
} from './NoticesCategoriesNav.styled';

const NoticesCategoriesNav = () => {
  const location = useLocation();

  return (
    <>
      <CategoriesList>
        <CategoriesItem>
          <StyledLink to={'lost-found'} state={{ from: location }}>
            lost/found
          </StyledLink>
        </CategoriesItem>
        <li>
          <StyledLink to={'for-free'} state={{ from: location }}>
            in good hands
          </StyledLink>
        </li>
        <li>
          <StyledLink to={'sell'} state={{ from: location }}>
            sell
          </StyledLink>
        </li>
      </CategoriesList>
    </>
  );
};

export default NoticesCategoriesNav;
