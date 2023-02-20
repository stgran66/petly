import { RxPlus } from 'react-icons/rx';
import { styled } from '@mui/system';

const AddIcon = styled(RxPlus)`
  width: 26px;
  height: auto;
  fill: currentColor;
  height: auto;
  margin-bottom: 4px;
  display: block;
  transition: ${({ theme }) => theme.transitions.normal};

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
  border: 1px solid transparent;
  color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.cardsShadow};
  background-color: ${({ theme }) => theme.colors.accent};
  transition: ${({ theme }) => theme.transitions.normal};

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.accent};
    border: 1px solid ${({ theme }) => theme.colors.accent};

    & span {
      scale: 1.05;
    }

    & .css-43gj1q {
      scale: 1.05;
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    &:hover,
    &:active {
      & span {
        scale: none;
      }
      & .css-43gj1q {
        scale: 1.1;
      }
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: relative;
    transform: translateY(0);
    width: 44px;
    height: 44px;
    margin-left: auto;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    right: 0;
  }
`;

const BtnInfo = styled('span')`
  font-family: ${({ theme }) => theme.fonts[0]};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.text.xs};
  line-height: ${({ theme }) => theme.lineHeights.xs};
  transition: ${({ theme }) => theme.transitions.normal};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: absolute;
    left: -86px;
    font-size: ${({ theme }) => theme.fontSizes.text.xl};
    color: ${({ theme }) => theme.colors.text};
  }
`;
const styles = { AddIcon, AddButton, BtnInfo };
export default styles;
