import styled from 'styled-components';

const BtnClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  padding: 9px;

  background-color: ${props => props.theme.colors.cardsBackground};
  backdrop-filter: blur(2px);
  border-radius: 50%;
  border: none;
  cursor: pointer;

  transition: background-color ${props => props.theme.tranistions.long};

  :hover,
  :focus {
    background-color: ${props => props.theme.colors.accent};
  }
`;
export default BtnClose;
