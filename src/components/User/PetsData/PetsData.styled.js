import styled from 'styled-components';

const ContainerWrapp = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  align-items: center;

  font-family: ${props => props.theme.fonts[0]};
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.text.xl};
  line-height: 1.35;
  letter-spacing: 0.04em;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 22px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    margin-bottom: 25px;
  }
`;

const Title = styled.h2`
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.fontSizes.headers.s};
    line-height: 1.357;
  }
`;

const styles = { ContainerWrapp, Title };

export default styles;
