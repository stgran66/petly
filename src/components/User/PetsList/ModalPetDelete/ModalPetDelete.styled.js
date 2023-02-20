import { styled } from '@mui/system';
import { MdPets } from 'react-icons/md';

const ModalDeletePetWrapp = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 60px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  width: 280px;

  padding: 15px 15px;
  border-radius: 20px;
  /* background-color: ${props => props.theme.colors.white}; */
  background-color: ${props => props.theme.colors.white};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 30px 30px;
    gap: 80px;
    width: 400px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    width: 500px;
  }
`;

const ModalDeletePetTitle = styled('p')`
  padding: 20px 10px;
  border-radius: 10px;
  text-align: center;
  background-color: ${props => props.theme.colors.white};
  /* color: ${props => props.theme.colors.accent}; */
  font-weight: ${props => props.theme.fontWeights.normal};
  font-size: ${props => props.theme.fontSizes.text.s};
  line-height: ${props => props.theme.lineHeights.xs};
  color: ${props => props.theme.colors.text};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    /* text-align: start; */
    font-size: ${props => props.theme.fontSizes.text.l};
    line-height: ${props => props.theme.lineHeights.s};
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding: 30px 15px;
  }
`;
const ModalDeletePetButtonsGroup = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  font-weight: ${props => props.theme.fontWeights.semiBold};
  font-size: ${props => props.theme.fontSizes.text.m};
  line-height: ${props => props.theme.lineHeights.m};
  letter-spacing: 0.04em;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: row-reverse;
    justify-content: space-between;
    gap: 15px;
    font-size: ${props => props.theme.fontSizes.text.xl};
    line-height: 1.35;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    gap: 24px;
  }
`;

const ButtonNo = styled('button')`
  display: flex;
  width: 240px;
  padding: 9px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  align-items: stretch;
  border: 2px solid ${props => props.theme.colors.accent};
  background-color: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.white};
  cursor: pointer;

  @media screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 100%;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 180px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
  }
`;

const ButtonYes = styled('button')`
  display: flex;
  width: 240px;
  padding: 9px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 2px solid ${props => props.theme.colors.accent};
  /* background-color: transparent; */
  background-color: ${props => props.theme.colors.white};
  cursor: pointer;
  color: ${props => props.theme.colors.text};

  @media screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 100%;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 180px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
  }
`;

const ButtonDeletePetIcon = styled(MdPets)`
  margin-left: 10px;
  scale: 1;

  transition: ${props => props.theme.transitions.normal};

  &:hover {
    scale: 1.3;
  }
`;

const styles = {
  ModalDeletePetWrapp,
  ModalDeletePetTitle,
  ModalDeletePetButtonsGroup,
  ButtonNo,
  ButtonYes,
  ButtonDeletePetIcon,
};

export default styles;
