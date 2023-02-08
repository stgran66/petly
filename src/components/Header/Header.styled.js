import { styled } from '@mui/system';

const HeaderEl = styled('header')`
  position: relative;
  padding-top: 16px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    align-items: center;
  }

  & nav {
    display: flex;
    width: 100%;
    > * {
      display: none;
      @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        &:last-child {
          display: block;
        }
      }
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      > * {
        display: flex;
      }
    }
  }
`;

const Logo = styled('span')`
  position: relative;
  font-family: ${({ theme }) => theme.fonts[1]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.logo.mobile};
  letter-spacing: 0.07em;
  color: ${({ theme }) => theme.colors.Text};

  z-index: 1110;
  & span {
    color: ${({ theme }) => theme.colors.accent};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.logo.desktop};
  }
`;
const styles = { HeaderEl, Logo };
export default styles;
