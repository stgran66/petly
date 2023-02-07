import { AiOutlinePlus } from 'react-icons/ai';
import styled from 'styled-components';

const AddIcon = styled(AiOutlinePlus)`
  width: 22px;
  height: 22px;
  fill: white;
  height: auto;
  margin-bottom: 4px;
`;

const AddButton = styled.button`
  position: fixed;
  top: 50%;
  right: 20px;
  z-index: 1;
  transform: translateY(-50%);
  width: 80px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.cardsShadow};
  background-color: ${({ theme }) => theme.colors.accent};
`;

const BtnInfo = styled.span`
  font-family: ${({ theme }) => theme.fonts[0]};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size:  theme.fontSizes.text.xs};
  line-height: ${({ theme }) => theme.lineHeights.xs};
`;
const styles = { AddIcon, AddButton, BtnInfo };
export default styles;
