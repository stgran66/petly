import styled from 'styled-components';
import { IoExitOutline } from 'react-icons/io5';

const LogoutButton = styled.button`
  margin-left: auto;
  display: flex;

  align-items: flex-end;
  padding: 0;
  border: 0;
  cursor: pointer;
  background-color: transparent;
  color: ${props => props.theme.colors.placeholderText};

  transition: ${props => props.theme.tranistions.normal};

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
    bottom: 0;
    left: 32px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    position: relative;
    margin-left: 0;
    left: 0;
  }
`;

const LogoutIcon = styled(IoExitOutline)`
  margin-right: 8px;
  width: 20px;
  height: 20px;
  color: ${props => props.theme.colors.accent};
`;

const styles = { LogoutButton, LogoutIcon };

export default styles;
