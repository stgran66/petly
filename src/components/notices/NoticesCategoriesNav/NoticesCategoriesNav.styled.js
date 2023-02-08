import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';

const CategoriesList = styled('ul')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 18px;
`;

const CategoriesItem = styled('li')`
  margin-bottom: 12px;
  &:not(:last-child) {
    margin-right: 12px;
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
`;

const styles = { CategoriesList, CategoriesItem, StyledLink };
export default styles;
