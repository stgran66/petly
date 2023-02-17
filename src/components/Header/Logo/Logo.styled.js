import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';

const LogoEl = styled('header')`
  position: relative;
  display: inline-block;
  z-index: 1110;
`;

const Link = styled(NavLink)`
  font-family: ${({ theme }) => theme.fonts[1]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.logo.mobile};
  letter-spacing: 0.07em;
  color: ${({ theme }) => theme.colors.text};

  & span {
    color: ${({ theme }) => theme.colors.accent};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.logo.desktop};
  }
`;
const styles = { LogoEl, Link };
export default styles;
