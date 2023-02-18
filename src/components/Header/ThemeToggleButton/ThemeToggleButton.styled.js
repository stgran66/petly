import { styled } from '@mui/system';
// import { BsFillSunFill, BsMoonStarsFill } from 'react-icons/bs';

const ToggleButton = styled('label')`
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    left: 30%;
    /* transform: translateY(-50%); */
    top: 33%;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    position: static;
  }

  input {
    display: none;
  }

  input + div {
    border-radius: 50%;
    width: 20px;
    height: 20px;

    position: relative;
    box-shadow: inset 7.77px -7.77px 0 0 #f2d2bd;
    transform: scale(1) rotate(-2deg);
    transition: box-shadow 0.5s ease 0s, transform 0.4s ease 0.1s;

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      width: 36px;
      height: 36px;

      box-shadow: inset 14px -14px 0 0 #f2d2bd;
    }
  }

  input + div::before {
    content: '';
    width: inherit;
    height: inherit;
    border-radius: inherit;
    position: absolute;
    left: 0;
    top: 0;
    transition: background 0.3s ease;
  }

  input + div::after {
    content: '';
    width: 4px;
    height: 4px;
    border-radius: 50%;
    margin: -2px 0 0 -2px;
    position: absolute;
    top: 50%;
    left: 50%;
    box-shadow: 0 -12.77px 0 ${props => props.theme.colors.accent},
      0 12.77px 0 ${props => props.theme.colors.accent},
      12.77px 0 0 ${props => props.theme.colors.accent},
      -12.77px 0 0 ${props => props.theme.colors.accent},
      8.33px 8.33px 0 ${props => props.theme.colors.accent},
      -8.33px 8.33px 0 ${props => props.theme.colors.accent},
      8.33px -8.33px 0 ${props => props.theme.colors.accent},
      -8.33px -8.33px 0 ${props => props.theme.colors.accent};
    transform: scale(0);
    transition: all 0.3s ease;

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      width: 8px;
      height: 8px;
      margin: -4px 0 0 -4px;
      box-shadow: inset 14px -14px 0 0 #f2d2bd;

      box-shadow: 0 -23px 0 ${props => props.theme.colors.accent},
        0 23px 0 ${props => props.theme.colors.accent},
        23px 0 0 ${props => props.theme.colors.accent},
        -23px 0 0 ${props => props.theme.colors.accent},
        15px 15px 0 ${props => props.theme.colors.accent},
        -15px 15px 0 ${props => props.theme.colors.accent},
        15px -15px 0 ${props => props.theme.colors.accent},
        -15px -15px 0 ${props => props.theme.colors.accent};
    }
  }

  input:checked + div {
    box-shadow: inset 32px -32px 0 0 #fff;
    transform: scale(0.5) rotate(0deg);
    transition: transform 0.3s ease 0.1s, box-shadow 0.2s ease 0s;
  }

  input:checked + div::before {
    background: ${props => props.theme.colors.accent};
    transition: background 0.3s ease 0.1s;
  }

  input:checked + div::after {
    transform: scale(1.5);
    transition: transform 0.5s ease 0.15s;
  }
`;

const styles = { ToggleButton };

export default styles;
