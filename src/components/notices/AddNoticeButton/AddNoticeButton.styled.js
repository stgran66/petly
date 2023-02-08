import { RxPlus } from 'react-icons/rx';
import { styled } from '@mui/system';

const AddIcon = styled(RxPlus)`
  width: 26px;
  height: auto;
  fill: white;
  height: auto;
  margin-bottom: 4px;
  display: block;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 0;
    width: 24px;
  }
`;

const AddButton = styled('button')`
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

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: relative;
    transform: translateY(0);
    width: 44px;
    height: 44px;
    margin-left: auto;
  }
`;

const BtnInfo = styled('span')`
  font-family: ${({ theme }) => theme.fonts[0]};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.text.xs};
  line-height: ${({ theme }) => theme.lineHeights.xs};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: absolute;
    left: -86px;
    font-size: ${({ theme }) => theme.fontSizes.text.xl};
    color: ${({ theme }) => theme.colors.text};
  }
`;
const styles = { AddIcon, AddButton, BtnInfo };
export default styles;
