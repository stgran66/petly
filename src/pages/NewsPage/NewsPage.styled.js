import { styled } from '@mui/system';
import { HiSearch } from 'react-icons/hi';

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
const SearchForm = styled('form')`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 608px;
  margin: 0 auto 28px;
  position: relative;
`;

const SearchInput = styled('input')`
  width: 100%;
  padding: 8px 12px;
  background: transparent;
  border: none;
  margin: 0;
  box-shadow: ${({ theme }) => theme.shadows.cardsShadow};
  border-radius: 20px;

  &::placeholder {
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    color: #535353;
    font-size: inherit;
    font-family: ${({ theme }) => theme.fonts[0]};
    line-height: ${({ theme }) => theme.lineHeights.m};
    letter-spacing: 0.04em;
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

const ArticleTitle = styled('h3')`
  width: 100%;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-family: ${({ theme }) => theme.fonts[0]};
  font-size: ${({ theme }) => theme.fontSizes.headers.xs};
  line-height: ${({ theme }) => theme.lineHeights.m};
  text-align: left;
  color: ${({ theme }) => theme.colors.text};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 42px 0 28px;
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
    margin: 42px 0 28px;
  }
`;

const ArticleDate = styled('p')`
  width: 100%;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-family: ${({ theme }) => theme.fonts[0]};
  font-size: ${({ theme }) => theme.fontSizes.text.m};
  line-height: ${({ theme }) => theme.lineHeights.m};
  text-align: left;
  color: ${({ theme }) => theme.colors.placeholderText};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 42px 0 28px;
  }
`;

const ArticleUrl = styled('a')`
  width: 100%;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-family: ${({ theme }) => theme.fonts[0]};
  font-size: ${({ theme }) => theme.fontSizes.text.m};
  line-height: ${({ theme }) => theme.lineHeights.m};
  text-align: left;
  color: ${({ theme }) => theme.colors.accent};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 42px 0 28px;
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
};
export default styles;
