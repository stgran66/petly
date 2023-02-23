import { styled } from '@mui/system';
import { Delete20Filled } from '@fluentui/react-icons';
import { RiPencilFill } from 'react-icons/ri';

const PetsListWpapp = styled('ul')`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    gap: 22px;
  }
`;

const PetItemWrapp = styled('li')`
  display: flex;
  flex-direction: column;

  gap: 20px;
  padding: 16px 20px 40px 20px;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.cardsShadowUser};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: row;
    gap: 32px;
    padding: 20px;
    border-radius: 40px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding: 20px 30px 20px 20px;
  }
`;

// ==========================================

const PetInfoFoto = styled('img')`
  display: block;
  width: 240px;
  height: 240px;
  border-radius: 20px;
  object-fit: cover;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    max-width: 161px;
    height: 161px;
    border-radius: 40px;
  }
`;

const PetInfoWrapp = styled('div')`
  width: 100%;
  position: relative;
`;

const PetInfo = styled('ul')`
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow: hidden;

  font-weight: ${props => props.theme.fontWeights.normal};
  font-size: ${props => props.theme.fontSizes.text.s};
  line-height: 1.36;
  color: ${props => props.theme.colors.text};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.fontSizes.text.m};
    line-height: ${props => props.theme.lineHeights.m};
  }

  li {
    white-space: normal;
    word-wrap: break-word;
  }
`;

const PetInfoName = styled('span')`
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.text.m};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.fontSizes.text.m};
    line-height: ${props => props.theme.lineHeights.m};
  }
`;

const PetDeleteButton = styled('button')`
  position: absolute;
  top: -5px;
  right: 0;
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  background-color: transparent;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    top: 0;
    background-color: ${props => props.theme.colors.commonBackground};
  }
`;

const PetDeleteIcon = styled(Delete20Filled)`
  width: 25px;
  height: 25px;
  color: ${props => props.theme.colors.placeholderText};

  transition: ${props => props.theme.transitions.normal};

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accent};
  }
`;

const PetUpdateButton = styled('button')`
  position: absolute;
  bottom: -40px;
  right: 0;
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 50%;
  cursor: pointer;

  background-color: transparent;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    top: 0;
    right: 50px;
    background-color: ${props => props.theme.colors.commonBackground};
  }
`;

const PetUpdateButtonIcon = styled(RiPencilFill)`
  width: 20px;
  height: 20px;

  color: ${props => props.theme.colors.placeholderText};
  scale: 1;

  transition: ${props => props.theme.transitions.normal};

  &:hover,
  &:focus {
    scale: 1.2;
    color: ${props => props.theme.colors.accent};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 20px;
    height: 20px;
  }
`;

const styles = {
  PetsListWpapp,
  PetItemWrapp,
  PetInfo,
  PetInfoName,
  PetInfoFoto,
  PetInfoWrapp,
  PetDeleteButton,
  PetDeleteIcon,
  PetUpdateButton,
  PetUpdateButtonIcon,
};

export default styles;
