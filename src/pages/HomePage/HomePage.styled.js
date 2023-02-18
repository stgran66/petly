import { styled } from '@mui/system';
import bgImage320 from '../../images/home_page/320Vector.svg';
import bgImage1280 from '../../images/home_page/1280Vector.png';
import happyClient from '../../images/home_page/happy_client.png';

const Wrapper = styled('div')`
  margin-top: 60px;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;

    background-image: url(${happyClient}), url(${bgImage320});
    background-size: 95%, 200%;
    background-repeat: no-repeat;
    background-position: bottom center, left 32% bottom -12%;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      background-size: 70%, 200%;
      background-position: bottom center, 45% -75%;
    }

    @media screen and (orientation: landscape) {
      background-size: 255px, 200%;
      background-position: bottom right 22px, 35% -15%;
    }

    @media screen and (min-width: 825px) {
      @media screen and (orientation: landscape) {
        background-size: 35%, 150%;
        background-position: bottom 30%, 35% -35%;
      }
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      top: 70px;
      background-image: url(${bgImage1280});
      background-size: auto;
      background-position: center bottom 0%;
    }
    @media screen and (min-width: 1400px) {
      background-size: cover;
    }
  }
  @media screen and (orientation: landscape) {
    margin-top: 40px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 92px;
  }
`;

const Title = styled('h1')`
  max-width: 350px;
  font-family: ${({ theme }) => theme.fonts[0]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.text.xxl};
  line-height: ${({ theme }) => theme.lineHeights.m};
  color: ${({ theme }) => theme.colors.text};
  text-shadow: #fff 4px 2px 5px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 90%;
    font-size: 68px;
    line-height: 100px;
  }
  @media screen and (orientation: landscape) {
    max-width: 60%;
    font-size: 40px;
    line-height: 54px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 588px;
    font-size: 68px;
    line-height: 100px;
  }
`;

const styles = {
  Title,
  Wrapper,
};
export default styles;
