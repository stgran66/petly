import { styled } from '@mui/system';

const NoticesContainer = styled('div')`
  display: flex;
  flex-wrap: no-wrap;
  justify-content: center;
`;

const List = styled('ul')`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  margin-bottom: 68px;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    grid-template-columns: repeat(4, 1fr);
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

const styles = {
  List,
  ListItem,
  NotFoundMessage,
  NoticesContainer,
};
export default styles;
