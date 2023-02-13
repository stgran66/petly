import { styled } from '@mui/system';

const NoListWrapp = styled('div')`
  padding-top: 15px;
  text-align: center;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding-top: 25px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding-top: 80px;
  }

  h3 {
    margin-bottom: 25px;
    color: ${props => props.theme.colors.accent};

    font-weight: ${props => props.theme.fontWeights.medium};
    font-size: ${props => props.theme.fontSizes.text.m};
    line-height: 1.36;

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: ${props => props.theme.fontSizes.text.l};
    }
    @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
      margin-bottom: 50px;
    }
  }
`;

export default NoListWrapp;
