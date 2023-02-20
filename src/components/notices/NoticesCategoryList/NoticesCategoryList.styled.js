import { Pagination } from '@mui/material';
import { styled } from '@mui/system';

const NoticesContainer = styled('div')`
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
  justify-content: center;
  align-items: center;
`;

const List = styled('ul')`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  margin: 0 auto;
  margin-bottom: 8px;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 48px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    grid-template-columns: repeat(4, 1fr);
    gap: 38px;
    margin-bottom: 168px;
  }
`;
const ListItem = styled('li')`
  margin-bottom: 32px;
  display: flex;
`;

const NotFoundMessage = styled('p')`
  color: #ef4444;
`;

const PaginationWrap = styled(Pagination)`
  margin-bottom: 68px;
  & button {
    margin: 2px 4px;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.text};
  }
  & .css-lqq3n7-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.whiteText};
  }
`;

const styles = {
  PaginationWrap,
  List,
  ListItem,
  NotFoundMessage,
  NoticesContainer,
};
export default styles;
