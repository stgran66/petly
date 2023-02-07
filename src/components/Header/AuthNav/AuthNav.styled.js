import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
// import styled from 'styled-components';

const ButtonEl = styled(Button)`
  padding: 8px 28px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  text-transform: inherit;

  color: #111111;
  border-radius: 40px;
  border: 2px solid #f59256;

  :hover {
    border: 2px solid #f59256;
    color: #fff;
    background-color: #f59256;
  }
`;

const AuthBtns = styled('ul')`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  gap: 12px;
`;
const styles = {
  ButtonEl,
  AuthBtns,
};
export default styles;
