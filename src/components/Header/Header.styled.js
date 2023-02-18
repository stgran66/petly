import { styled } from '@mui/system';

const HeaderEl = styled('header')`
  position: relative;
  padding-top: 16px;
  z-index: 5;

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

const styles = { HeaderEl };
export default styles;
