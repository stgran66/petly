import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';

const NavList = styled('ul')`
  margin: 60px 0 0 0;
  padding: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin: 0 0 0 80px;
    gap: 80px;
    flex-direction: row;
  }
`;

const Link = styled(NavLink)`
  display: flex;
  align-items: center;

  font-family: ${({ theme }) => theme.fonts[0]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.navLinks.mobile};
  line-height: 44px;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.navLinks};

  &:hover,
  &.active {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: revert;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.navLinks.tablet};
    line-height: 66px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes.navLinks.desktop};
    line-height: 27px;
  }
`;
const styles = { NavList, Link };
export default styles;
