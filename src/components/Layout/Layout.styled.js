import { styled } from '@mui/system';

const Container = styled('div')`
  max-width: min(100% - 40px);
  margin-inline: auto;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: min(100% - 64px, 768px);
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: min(100% - 32px, 1280px);
  }
`;
const styles = { Container };
export default styles;
