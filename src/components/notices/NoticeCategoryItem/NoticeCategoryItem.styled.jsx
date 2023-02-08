import { styled } from '@mui/system';
import { ReactComponent as FavIcon } from '../NoticeCategoryItem/fav-icon.svg';

const NoticeItemCard = styled('div')`
  border: 1px solid black;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  width: 280px;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 336px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    width: 288px;
  }
`;

const ImgWrapper = styled('div')`
  position: relative;
  margin-bottom: 20px;
`;

const Image = styled('img')`
  display: block;
  width: 280px;
  height: 288px;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 336px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    width: 288px;
  }
`;

const FavouriteIcon = styled(FavIcon)`
  scale: 1;
  stroke: ${props => props.theme.colors.accent};
  transition: fill #ff6101;
  :hover,
  :focus {
    stroke: #ff6101;
    /* fill: #ff6101; */
  }
`;

const Category = styled('span')`
  position: absolute;
  top: 20px;
  padding: 6px 0 6px 20px;
  width: 158px;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.text.xs};
  line-height: ${props => props.theme.lineHeights.xs};
  letter-spacing: 0.04em;
  background-color: #ffffff60;
`;
const Button = styled('button')`
  content: '';
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  background-color: #ffffff60;
  cursor: pointer;
`;

const ItemTitle = styled('h2')`
  margin-bottom: 20px;
  padding: 0 20px;
  word-break: break-word;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.headers.s};
  line-height: ${props => props.theme.lineHeights.s};
  letter-spacing: -0.01em;
  flex-grow: 1;
`;

const About = styled('div')`
  display: flex;
  flex-direction: column;
`;

const AboutList = styled('div')`
  padding: 0 20px;
  display: grid;
  grid-template-columns: 82px 150px;
  gap: 8px;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 82px 206px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    grid-template-columns: 79px 161px;
  }
`;

const Content = styled('span')`
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.text.m};
  line-height: ${props => props.theme.lineHeights.m};
  word-break: break-word;
`;

const LearnMore = styled('button')`
  display: block;
  width: 248px;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 12px;
  border: 2px solid ${props => props.theme.colors.accent};
  border-radius: 40px;
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.text.m};
  line-height: ${props => props.theme.lineHeights.xs};
  letter-spacing: 0.04em;
  color: ${props => props.theme.colors.accent};
  cursor: pointer;
  :hover,
  :focus {
    border-color: #ff6101;
    color: #ff6101;
  }
`;

const styles = {
  NoticeItemCard,
  Image,
  ImgWrapper,
  Category,
  Button,
  ItemTitle,
  About,
  AboutList,
  Content,
  LearnMore,
  FavouriteIcon,
};
export default styles;
