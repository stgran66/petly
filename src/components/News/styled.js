import { styled } from '@mui/system';
import { HiSearch } from 'react-icons/hi';
import SearchIcon from '@mui/icons-material/Search';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { IconButton, InputBase, FormControl } from '@mui/material';

const SearchTitle = styled('h2')`
  width: 100%;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-family: ${({ theme }) => theme.fonts[0]};
  font-size: ${({ theme }) => theme.fontSizes.headers.xs};
  line-height: ${({ theme }) => theme.lineHeights.m};
  text-align: center;
  color: ${({ theme }) => theme.colors.text};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 42px 0 28px;
  }
`;
const SearchForm = styled(FormControl)`
  width: 100%;
  box-sizing: border-box;
  max-width: 608px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  margin: 0 auto;
  margin-bottom: 28px;
  box-shadow: ${({ theme }) => theme.shadows.cardsShadow};
  border-radius: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 40px;
  }
`;

const SearchInput = styled(InputBase)`
  width: 100%;
  height: 40px;
  font-size: 16px;
  padding-left: 14px;

  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts[0]};

  &::placeholder {
    padding: 8px 0;
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    color: #535353;
    font-size: inherit;
    font-family: ${({ theme }) => theme.fonts[0]};
    line-height: ${({ theme }) => theme.lineHeights.m};
    letter-spacing: 0.04em;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.text.xl};
    padding-left: 20px;
    height: 44px;
    border-radius: 40px;
    &::placeholder {
      font-size: ${({ theme }) => theme.fontSizes.text.xl};
    }
  }
`;

const InputIcon = styled('span')`
  position: absolute;
  display: block;
  right: 12px;
  width: 15px;
  height: 15px;
`;

const Icon = styled(HiSearch)`
  width: 100%;
  height: auto;
`;

const DateAndLink = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
  @media screen and (min-width: ${props => props.theme.breakpoints.mobile}) {
    margin-top: 20px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-top: 40px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    margin-top: 40px;
  }
`;
const Article = styled('li')`
  display: flex;
  position: relative;

  @media screen and (max-width: 767px) {
    width: 100%;
    margin-bottom: 8px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    flex-basis: calc((100%) / 2 - 16px);
    margin-bottom: 28px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    flex-basis: calc((100% - 64px) / 3);
    margin-bottom: 28px;
  }
`;

const NewsListStyle = styled('ul')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 32px;
  margin-bottom: -40px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: -60px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    margin-bottom: -60px;
  }
`;

const ArticleTitle = styled('h3')`
  width: 100%;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-family: ${({ theme }) => theme.fonts[0]};
  font-size: ${({ theme }) => theme.fontSizes.headers.xs};
  line-height: ${({ theme }) => theme.lineHeights.m};
  text-align: left;
  color: ${({ theme }) => theme.colors.text};
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 0 0 16px;
  }
`;

const NotFoundArticle = styled('h2')`
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.headers.s};
`;

const TopBorder = styled('p')`
  margin-bottom: 4px;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 8px;
  }

  &:before {
    content: '';
    position: absolute;
    width: 200px;
    height: 4px;
    border-radius: 2px;
    background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      height: 8px;
      width: 280px;
    }
    @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
      width: 340px;
    }
  }
`;
const ArticleText = styled('p')`
  width: 100%;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-family: ${({ theme }) => theme.fonts[0]};
  font-size: ${({ theme }) => theme.fontSizes.text.m};
  line-height: ${({ theme }) => theme.lineHeights.m};
  text-align: left;
  color: ${({ theme }) => theme.colors.newsText};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 0 0 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
    -webkit-line-clamp: 7;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 0 0 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
    -webkit-line-clamp: 6;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin: 0 0 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
    -webkit-line-clamp: 5;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
`;

const ArticleDate = styled('p')`
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-family: ${({ theme }) => theme.fonts[0]};
  font-size: ${({ theme }) => theme.fontSizes.text.m};
  line-height: ${({ theme }) => theme.lineHeights.m};
  text-align: left;
  color: ${({ theme }) => theme.colors.placeholderText};
  margin: 0;
  padding: 0;
`;

const ArticleUrl = styled('a')`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-family: ${({ theme }) => theme.fonts[0]};
  font-size: ${({ theme }) => theme.fontSizes.text.m};
  line-height: ${({ theme }) => theme.lineHeights.m};
  text-align: left;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.accent};
  margin: 0;
  padding: 0;
  &:hover {
    color: ${({ theme }) => theme.colors.focusTextFields};
  }
`;
const InputSearchIcon = styled('span')`
  margin-right: 12px;
  display: flex;
  align-items: center;
`;
const IconSearch = styled(SearchIcon)`
  fill: ${({ theme }) => theme.colors.text};
`;
const IconClose = styled(HighlightOffIcon)`
  fill: currentColor;
`;
const InputButton = styled(IconButton)`
  width: 35px;
  height: 35px;
  margin-right: 4px;
  padding: 8px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  transition: ${({ theme }) => theme.transitions.normal};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.white};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 14px;
  }
`;

const StyledContainer = styled('div')`
  text-align: center;

  h2 {
    font-family: ${props => props.theme.fonts[0]};
    font-size: ${props => props.theme.fontSizes.headers.xs};
    line-height: ${props => props.theme.lineHeights.m};
    margin-top: 42px;
    margin-bottom: 28px;
    color: ${props => props.theme.colors.text};

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: ${props => props.theme.fontSizes.headers.l};
      margin-top: 88px;
      margin-bottom: 40px;
    }

    @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
      font-size: ${props => props.theme.fontSizes.headers.l};
      margin-top: 72px;
      margin-bottom: 60px;
    }
  }
`;

const styles = {
  SearchTitle,
  SearchForm,
  SearchInput,
  InputIcon,
  ArticleUrl,
  Icon,
  ArticleDate,
  ArticleTitle,
  ArticleText,
  InputSearchIcon,
  IconSearch,
  IconClose,
  InputButton,
  DateAndLink,
  Article,
  NewsListStyle,
  TopBorder,
  NotFoundArticle,
  StyledContainer,
};
export default styles;
