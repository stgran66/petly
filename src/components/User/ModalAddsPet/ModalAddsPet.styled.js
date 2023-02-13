import { styled } from '@mui/system';
import { VscChromeClose } from 'react-icons/vsc';

const ModalAddPetWrapp = styled('div')`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 28px;
  justify-content: center;

  padding: 40px 20px;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.white};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 40px 80px;
    border-radius: 40px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding: 40px 84px;
  }
`;

const ModalTitle = styled('h2')`
  text-align: center;
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.headers.xs};
  line-height: ${props => props.theme.lineHeights.m};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.fontSizes.headers.m};
    line-height: ${props => props.theme.lineHeights.s};
  }
`;

const ModalCloseButton = styled('button')`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  /* margin-left: auto; */
  justify-content: center;
  width: 44px;
  height: 44px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${props => props.theme.colors.commonBackground};

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    top: 24px;
    right: 24px;
  }
`;

const ModalCloseIcon = styled(VscChromeClose)`
  width: 25px;
  height: 25px;
  color: ${props => props.theme.colors.black};
  scale: 1;

  transition: ${props => props.theme.transitions.normal};

  &:hover,
  &:focus {
    scale: 1.3;
  }
`;

const styles = {
  ModalAddPetWrapp,
  ModalTitle,
  ModalCloseButton,
  ModalCloseIcon,
};

export default styles;
