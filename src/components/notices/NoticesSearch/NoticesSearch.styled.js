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

  @media ${({ theme }) => theme.devices.mobileS} {
    margin: 42px 0 28px;
  }
`;
const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 608px;
  margin: 0 auto 28px;
  position: relative;
`;

const SearchInput = styled.input`
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
    font-family: ${({ theme }) => theme.fonts[0]}
    line-height: ${({ theme }) => theme.lineHeights.m};
    letter-spacing: 0.04em;
  }
`;

const InputIcon = styled.span`
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

const styles = { SearchTitle, SearchForm, SearchInput, InputIcon, Icon };
export default styles;
