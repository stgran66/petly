import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  margin: 60px 0 0 0;
  padding: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  @media screen and (min-width: 1280px) {
    margin: 0 0 0 80px;
    gap: 80px;
    flex-direction: row;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;

  /* font-family: 'Manrope'; */
  font-weight: 500;
  font-size: 32px;
  line-height: 44px;
  letter-spacing: 0.04em;
  color: #181c27;
  &:hover,
  &.active {
    color: #f59256;
    text-decoration: revert;
  }
  @media screen and (min-width: 1280px) {
    font-size: 28px;
  }
`;
