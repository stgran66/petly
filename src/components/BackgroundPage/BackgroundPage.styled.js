import { styled } from '@mui/system';
import bgImage320 from '../../images/home_page/320Vector.svg';
import bgImage768 from '../../images/home_page/338.svg';

const Wrapper = styled('div')`
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: calc(100vh - 57px);
    display: flex;
    align-items: center;
    @media screen and (orientation: landscape) {
      overflow: hidden;
    }
  }
  &::after {
    content: '';
    position: absolute;
    top: 65%;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-image: url(${bgImage320});
    background-size: 200%;
    background-repeat: no-repeat;
    background-position: left 32% top;

    @media screen and (orientation: landscape) {
      background-position: left 32% top -10%;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      top: 55%;
      background-image: url(${bgImage768});
      background-size: 150%;
      background-position: left 10% top;

      @media screen and (orientation: landscape) {
        background-size: cover;
        background-position: 30px -60px;
      }
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      top: 30%;
      background-size: cover;
      background-position: left 0% top 20px;
    }
  }
`;
const styles = {
  Wrapper,
};
export default styles;
