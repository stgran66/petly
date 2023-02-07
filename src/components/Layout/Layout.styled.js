import styled from 'styled-components';

const Container = styled.div`
  max-width: min(100% - 40px);
  margin-inline: auto;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: min(100% - 40px, 768px);
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: min(100% - 40px, 1280px);
  }
`;
const styles = { Container };
export default styles;
