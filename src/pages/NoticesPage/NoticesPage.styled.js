import styled from 'styled-components';

const NoticesNavContainer = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
  }
`;

export default NoticesNavContainer;
