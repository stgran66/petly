import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import select from 'redux/auth/selectors';
import styles from './NoticesCategoriesNav.styled';
import options from './options';
const {
  CategoriesItem,
  CategoriesList,
  StyledLink,
  LogInNoticesNav,
  NoticesNav,
} = styles;
const { selectIsLoggedIn } = select;

const NoticesCategoriesNav = () => {
  const location = useLocation();
  const { isLoggedIn } = useSelector(selectIsLoggedIn);
  const { navOptions, privateNavOptions } = options;

  return (
    <CategoriesList>
      <NoticesNav>
        {navOptions.map(({ option, path }) => (
          <CategoriesItem key={path}>
            <StyledLink to={`/notices/${path}`} state={{ from: location }}>
              {option}
            </StyledLink>
          </CategoriesItem>
        ))}
      </NoticesNav>
      {isLoggedIn && (
        <LogInNoticesNav>
          {privateNavOptions.map(({ option, path }) => (
            <CategoriesItem key={path}>
              <StyledLink to={`/notices/${path}`} state={{ from: location }}>
                {option}
              </StyledLink>
            </CategoriesItem>
          ))}
        </LogInNoticesNav>
      )}
    </CategoriesList>
  );
};

export default NoticesCategoriesNav;
