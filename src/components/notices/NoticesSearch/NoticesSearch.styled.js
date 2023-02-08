import styled from 'styled-components';
import { HiSearch } from 'react-icons/hi';

const SearchTitle = styled.h2`
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
    font-size: ${({ theme }) => theme.fontSizes.headers.l};
  }
`;
const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 608px;
  margin: 0 auto 28px;
  position: relative;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 40px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  font-size: 16px;
  padding-left: 12px;
  background: transparent;
  border: none;
  margin: 0;
  box-shadow: ${({ theme }) => theme.shadows.cardsShadow};
  border-radius: 20px;

  &::placeholder {
    padding: 8px 0;
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    color: #535353;
    font-size: inherit;
    font-family: ${({ theme }) => theme.fonts[0]}
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
  };
}
`;

const InputIcon = styled.span`
  position: absolute;
  display: block;
  right: 12px;
  width: 16px;
  height: 16px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 20px;
    height: 20px;
    right: 14px;
  }
`;

const Icon = styled(HiSearch)`
  width: 100%;
  height: auto;
`;

const styles = { SearchTitle, SearchForm, SearchInput, InputIcon, Icon };
export default styles;
