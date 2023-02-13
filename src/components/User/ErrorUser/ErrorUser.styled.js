import { styled } from '@mui/system';

const ErrorWrapp = styled('div')`
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: center;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding-top: 25px;
    padding-bottom: 25px;
  }

  h3 {
    color: ${props => props.theme.colors.accent};

    font-weight: ${props => props.theme.fontWeights.medium};
    font-size: ${props => props.theme.fontSizes.headers.xs};
    line-height: 1.36;

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: ${props => props.theme.fontSizes.headers.s};
    }
  }
`;

export default ErrorWrapp;
