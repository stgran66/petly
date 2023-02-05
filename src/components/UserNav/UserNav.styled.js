import { styled } from '@mui/material/styles';

import Button from '@mui/material/Button';

const NavUser = styled('div')`
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    display: ${({ hiddenBlock }) => (hiddenBlock ? 'none' : 'block')};
    margin-left: auto;
    margin-right: 72px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 0;
  }
`;

const ButtonEl = styled(Button)`
  padding: 8px 28px;
  /* font-family: 'Manrope'; */
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;

  letter-spacing: 0.04em;

  border: 2px solid #f59256;
  color: #fff;
  background-color: #f59256;
  border-radius: 40px;

  :hover {
    border: 2px solid #f59256;
    color: #fff;
    background-color: #f59256;
  }
`;
const styles = { NavUser, ButtonEl };
export default styles;
