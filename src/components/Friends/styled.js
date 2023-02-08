import { styled } from '@mui/system';

const StyledList = styled('ul')`
  display: flex;
  gap: 12px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    gap: 32px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    gap: 32px;
  }

  li {
    display: flex;
    @media screen and (max-width: 767px) {
      width: 100%;
      max-width: 280px;
    }

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      flex-basis: calc((100%) / 2 - 16px);
      max-width: 336px;
    }

    @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
      flex-basis: calc((100%) / 2 - 16px);
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

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: ${props => props.theme.fontSizes.headers.l};
      margin-top: 88px;
      margin-bottom: 40px;
    }

    @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
      font-size: ${props => props.theme.fontSizes.headers.l};
      margin-top: 72px;
      margin-bottom: 60px;
    }
  }
`;

const StyledFriend = styled('div')`
  font-family: ${props => props.theme.fonts[0]};
  font-size: ${props => props.theme.fontSizes.text.xs};
  line-height: ${props => props.theme.lineHeights.xs};
  font-weight: ${props => props.theme.fontWeights.medium};
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.white};
  border-radius: 20px;
  padding: 14px 4px 12px 4px;
  overflow: hidden;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.fontSizes.text.s};
    line-height: ${props => props.theme.lineHeights.s};
    border-radius: 40px;
    padding: 16px 4px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    font-size: ${props => props.theme.fontSizes.text.m};
    line-height: ${props => props.theme.lineHeights.s};
    border-radius: 40px;
    padding: 16px 4px;
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

    a {
      text-decoration-line: underline;
      color: ${props => props.theme.colors.text};
    }
  }

  dd {
    margin: 0;
    :not(:last-child) {
      margin-bottom: 4px;

      @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
        margin-bottom: 8px;
      }

      @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
        margin-bottom: 12px;
      }
    }
  }

  img {
    width: 110px;
    height: 78px;

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      width: 120px;
      height: 85px;
    }

    @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
      width: 158px;
      height: 112px;
    }
  }
`;

const styles = { StyledList, StyledContainer, StyledFriend };

export default styles;
