import { NavLink } from 'react-router-dom';
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import errorImg from '../../images/error.png';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 100vh;
  background: url(${errorImg});
  background-repeat: no-repeat;
  background-size: 768px;
  background-position: top center;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    background-size: cover;
  }
`;

const BackToMainBtn = styled(Button)`
  color: ${({ theme }) => theme.colors.accent};
  background-color: ${({ theme }) => theme.colors.white};
  border-color: ${({ theme }) => theme.colors.accent};
  padding: 16px;
  position: absolute;
  min-width: 200px;
  margin-top: 70px;
  margin-left: 32px;
  font-size: ${({ theme }) => theme.fontSizes.text.m};
  transition: ${({ theme }) => theme.transitions.normal};
  align-self: center;
  border: 1px solid ${({ theme }) => theme.colors.accent};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.white};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-left: 50px;
    font-size: ${({ theme }) => theme.fontSizes.text.l};
  }
`;

const StyledLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
`;

const BtnIcon = styled(PetsIcon)`
  fill: currentColor;
`;

const styles = { Container, BackToMainBtn, StyledLink, BtnIcon };
export default styles;
