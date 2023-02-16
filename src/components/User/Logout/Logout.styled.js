import { styled } from '@mui/system';
import { IoExitOutline } from 'react-icons/io5';

const LogoutButton = styled('button')`
  margin-left: auto;
  display: flex;

  align-items: flex-end;
  padding: 0;
  border: 0;
  cursor: pointer;
  background-color: transparent;
  color: ${props => props.theme.colors.placeholderText};

  transition: ${props => props.theme.transitions.normal};

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accent};
  }

  font-family: ${props => props.theme.fonts[0]};
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.text.m};
  line-height: ${props => props.theme.lineHeights.m};
  letter-spacing: 0.04em;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    position: absolute;
    bottom: 24px;
    left: 32px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    position: relative;
    margin-left: 0;
    left: 0;
    bottom: 0;
  }
`;

const LogoutIcon = styled(IoExitOutline)`
  margin-right: 8px;
  width: 20px;
  height: 20px;
  color: ${props => props.theme.colors.accent};
`;

const ModalLogoutWrapp = styled('div')`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  width: 280px;

  padding: 40px 20px;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.white};
  /* background-color: transparent; */

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 40px 80px;
    gap: 60px;
    width: 608px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    /* padding: 40px 84px; */
  }
`;

const ModalLogoutTitle = styled('p')`
  text-align: center;
  color: ${props => props.theme.colors.accent};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  font-size: ${props => props.theme.fontSizes.text.xl};
  line-height: ${props => props.theme.lineHeights.m};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.fontSizes.headers.xs};
    line-height: ${props => props.theme.lineHeights.s};
  }
`;
const ModalLogoutButtonsGroup = styled('div')`
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
    justify-content: center;
    gap: 40px;
    font-size: ${props => props.theme.fontSizes.text.xl};
    line-height: 1.35;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    gap: 24px;
  }
`;

const ButtonNo = styled('button')`
  width: 240px;
  padding: 9px;
  border-radius: 40px;
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
  width: 240px;
  padding: 9px;
  border-radius: 40px;
  border: 2px solid ${props => props.theme.colors.accent};
  background-color: transparent;
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

const styles = {
  LogoutButton,
  LogoutIcon,
  ModalLogoutWrapp,
  ModalLogoutTitle,
  ModalLogoutButtonsGroup,
  ButtonNo,
  ButtonYes,
};

export default styles;
