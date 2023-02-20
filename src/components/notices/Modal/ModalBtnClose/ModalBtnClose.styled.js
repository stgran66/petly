import { styled } from '@mui/system';

const BtnClose = styled('button')`
  position: fixed;
  top: 20px;
  right: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  padding: 9px;

  background-color: ${props => props.theme.colors.cardsBackground};
  color: ${props => props.theme.colors.text};
  backdrop-filter: blur(2px);
  border-radius: 50%;

  border: none;
  cursor: pointer;
  z-index: 5;
  transition: background-color ${props => props.theme.transitions.long};

  :hover,
  :focus {
    background-color: ${props => props.theme.colors.accent};
  }
`;
export default BtnClose;
