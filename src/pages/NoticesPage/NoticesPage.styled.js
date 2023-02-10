import { styled } from '@mui/system';

const NoticesSection = styled('section')`
  min-height: 100vh;
`;

const NoticesNavContainer = styled('div')`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
  }
`;

const styles = { NoticesNavContainer, NoticesSection };
export default styles;
