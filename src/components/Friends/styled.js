import { styled } from '@mui/system';

const StyledList = styled('ul')`
  display: flex;
  gap: 12px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 100px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    gap: 32px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    gap: 32px;
  }

  li {
    display: flex;
    justify-content: center;
    align-self: stretch;
    @media screen and (max-width: 767px) {
      width: 100%;
    }

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      flex-basis: calc((100%) / 2 - 16px);
    }

    @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
      flex-basis: calc((100% - 64px) / 3);
    }
  }
`;

const StyledContainer = styled('div')`
  text-align: center;

  h2 {
    font-family: ${props => props.theme.fonts[0]};
    font-size: ${props => props.theme.fontSizes.headers.xs};
    line-height: ${props => props.theme.lineHeights.m};
    margin-top: 42px;
    margin-bottom: 28px;
    color: ${props => props.theme.colors.text};

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: ${props => props.theme.fontSizes.headers.l};
      margin-top: 92px;
      margin-bottom: 40px;
    }

    @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
      font-size: ${props => props.theme.fontSizes.headers.l};
      margin-top: 60px;
      margin-bottom: 60px;
    }
  }
`;

const StyledFriend = styled('div')`
  width: 100%;
  max-width: 280px;
  font-family: ${props => props.theme.fonts[0]};
  font-size: ${props => props.theme.fontSizes.text.xs};
  line-height: ${props => props.theme.lineHeights.xs};
  font-weight: ${props => props.theme.fontWeights.medium};
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.white};
  border-radius: 20px;
  padding: 14px 4px 12px 4px;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.cardsShadow};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    max-width: 336px;

    font-size: ${props => props.theme.fontSizes.text.s};
    line-height: ${props => props.theme.lineHeights.s};
    border-radius: 40px;
    padding: 16px 4px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    max-width: 395px;

    font-size: ${props => props.theme.fontSizes.text.m};
    line-height: ${props => props.theme.lineHeights.s};
    border-radius: 40px;
    padding: 16px 4px;
  }

  h3 {
    min-height: 38px;

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      min-height: 46px;
    }

    @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
      min-height: 56px;
    }
  }

  h3 > a {
    color: ${props => props.theme.colors.accent};
    text-decoration-line: underline;

    font-weight: ${props => props.theme.fontWeights.bold};

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: ${props => props.theme.fontSizes.text.m};
    }

    @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
      font-size: ${props => props.theme.fontSizes.text.xl};
    }
  }
  > div {
    display: flex;
    gap: 12px;
    margin-top: 12px;
  }

  dl {
    text-align: left;

    > div {
      margin-bottom: 4px;
      transition: ${props => props.theme.transitions.short};

      @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
        margin-bottom: 8px;
      }

      @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
        margin-bottom: 12px;
      }

      &:has(button:hover) {
        color: ${props => props.theme.colors.accent};
      }

      &:has(a:hover) {
        color: ${props => props.theme.colors.accent};
      }

      button {
        border: none;
        background-color: transparent;
        font-family: ${props => props.theme.fonts[0]};
        font-size: ${props => props.theme.fontSizes.text.xs};
        line-height: ${props => props.theme.lineHeights.xs};
        font-weight: ${props => props.theme.fontWeights.medium};
        cursor: pointer;
        transition: ${props => props.theme.transitions.short};

        &:hover {
          color: ${props => props.theme.colors.accent};
        }

        @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
          font-size: ${props => props.theme.fontSizes.text.s};
          line-height: ${props => props.theme.lineHeights.s};
        }

        @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
          font-size: ${props => props.theme.fontSizes.text.m};
          line-height: ${props => props.theme.lineHeights.s};
        }
      }
    }

    a {
      text-decoration-line: underline;
      color: ${props => props.theme.colors.text};
      transition: ${props => props.theme.transitions.short};

      &:hover {
        color: ${props => props.theme.colors.accent};
      }
    }
  }

  dd {
    margin: 0;

    button {
      padding: 0;
      color: ${props => props.theme.colors.text};
    }
  }

  img {
    width: 110px;
    height: 78px;
    border-radius: 20px;
    filter: ${props => props.theme.filters.image};
    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      width: 120px;
      height: 85px;
    }

    @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
      width: 158px;
      height: 112px;
    }
  }

  div.empty-image {
    background-color: transparent;
    position: relative;
    padding: 39px 55px;

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      padding: 42.5px 60px;
    }

    @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
      padding: 56px 79px;
    }
  }
`;

const StyledModal = styled('div')`
  border: 1px solid ${props => props.theme.colors.accent};
  border-radius: 8px;
  box-shadow: ${props => props.theme.shadows.timeModalShadow};
  padding: 12px 10px;
  position: absolute;
  background-color: ${props => props.theme.colors.white};
  width: 120px;

  font-family: ${props => props.theme.fonts[0]};
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.text.xs};
  line-height: ${props => props.theme.lineHeights.xs};
  color: ${props => props.theme.colors.text};

  li {
    display: flex;
    justify-content: space-between;

    :not(:last-child) {
      margin-bottom: 4px;
    }
  }
`;

const styles = { StyledList, StyledContainer, StyledFriend, StyledModal };

export default styles;
