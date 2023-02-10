import { styled } from '@mui/system';
import { IconButton, InputBase, FormControl } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

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
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 92px 0 40px;
    font-size: ${({ theme }) => theme.fontSizes.headers.l};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin: 60px 0 40px;
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

const InputSearchIcon = styled('span')`
  margin-right: 12px;
  display: flex;
  align-items: center;
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

const IconSearch = styled(SearchIcon)`
  fill: ${({ theme }) => theme.colors.text};
`;
const IconClose = styled(HighlightOffIcon)`
  fill: currentColor;
`;

const styles = {
  SearchTitle,
  SearchForm,
  SearchInput,
  InputButton,
  IconSearch,
  IconClose,
  InputSearchIcon,
};
export default styles;
