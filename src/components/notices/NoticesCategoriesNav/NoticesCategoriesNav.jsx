import { useLocation } from 'react-router-dom';
import styles from './NoticesCategoriesNav.styled';
import options from './options';
import hooks from 'hooks';
const {
  CategoriesItem,
  CategoriesList,
  StyledLink,
  LogInNoticesNav,
  NoticesNav,
} = styles;

const NoticesCategoriesNav = () => {
  const location = useLocation();
  const { isLoggedIn } = hooks.useAuth();
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
