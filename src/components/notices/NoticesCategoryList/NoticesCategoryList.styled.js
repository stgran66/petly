import styled from 'styled-components';

const NoticesContainer = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  justify-content: center;
`;
const List = styled.ul``;

const ListItem = styled.li`
  margin-bottom: 32px;
`;

const NotFoundMessage = styled.p`
  color: #ef4444;
`;

const styles = { List, ListItem, NotFoundMessage, NoticesContainer };
export default styles;
