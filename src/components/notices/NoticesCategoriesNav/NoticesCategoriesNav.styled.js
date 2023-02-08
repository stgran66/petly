import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';

const CategoriesList = styled('div')`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 18px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 44px;
  }
`;

const CategoriesItem = styled('li')`
  margin-bottom: 12px;
  &:not(:last-child) {
    margin-right: 12px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 16px;
  }
`;

const StyledLink = styled(NavLink)`
  display: block;
  padding: 8px 28px;
  cursor: pointer;
  text-decoration: none;
  border: 2px solid ${({ theme }) => theme.colors.accent};
  border-radius: 40px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.text};
  transition: background-color 250ms ease-out, color 250ms ease-out;

  &:hover,
  &:focus,
  &.active {
    text-decoration: none;
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.white};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 10px 28px;
    font-size: ${({ theme }) => theme.fontSizes.text.xl};
  }
`;

const LogInNoticesNav = styled('ul')`
  display: flex;
  margin-right: auto;
`;

const NoticesNav = styled('ul')`
  display: flex;
  flex-wrap: wrap;
`;
const styles = {
  CategoriesList,
  CategoriesItem,
  StyledLink,
  LogInNoticesNav,
  NoticesNav,
};
export default styles;
