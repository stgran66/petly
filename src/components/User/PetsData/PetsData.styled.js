import { styled } from '@mui/system';
import { AddCircle20Filled } from '@fluentui/react-icons';

const ContainerWrapp = styled('div')`
  display: flex;
  justify-content: space-between;
  /* margin-bottom: 25px; */
  align-items: baseline;

  /* @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 22px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    margin-bottom: 25px;
  } */
`;

const Title = styled('h2')`
  margin-bottom: 25px;
  font-family: ${props => props.theme.fonts[0]};
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.text.xl};
  line-height: 1.35;
  letter-spacing: 0.04em;

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    margin-bottom: 25px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 22px;
    font-size: ${props => props.theme.fontSizes.headers.s};
    line-height: 1.357;
  }
`;

const UserPetAddButton = styled('button')`
  display: flex;
  align-items: center;
  padding: 0;
  border: 0;
  cursor: pointer;
  background-color: transparent;
  outline: transparent;

  font-family: ${props => props.theme.fonts[0]};
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.text.xl};
  line-height: 1.35;
  letter-spacing: 0.04em;

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    margin-right: 16px;
  }
`;

const PetAddIcon = styled(AddCircle20Filled)`
  margin-left: 10px;
  width: 45px;
  height: 45px;
  color: ${props => props.theme.colors.accent};
  scale: 1;

  transition: ${props => props.theme.transitions.normal};

  &:hover,
  &:focus {
    scale: 1.3;
  }
`;

const styles = { ContainerWrapp, Title, UserPetAddButton, PetAddIcon };

export default styles;
