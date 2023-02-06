import { styled } from '@mui/material/styles';
import { HiSearch } from 'react-icons/hi';

export const SearchTitle = styled('h2')`
  margin-top: 42px;
  margin-bottom: 28px;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
`;
export const SearchForm = styled('form')`
  display: flex;
  align-items: center;
  max-width: 608px;
  margin: 0 auto;
  position: relative;
`;

export const SearchInput = styled('input')`
  width: 100%;
  padding: 8px 12px;
  background: transparent;
  border: none;
  margin: 0;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 20px;

  &::placeholder {
    font-weight: 500;
    color: #535353;
  }
`;

export const InputIcon = styled('span')`
  position: absolute;
  display: block;
  right: 12px;
  width: 15px;
  height: 15px;
`;

export const Icon = styled(HiSearch)`
  width: 100%;
  height: auto;
`;
