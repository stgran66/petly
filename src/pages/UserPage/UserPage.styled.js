import styled from 'styled-components';

const MainContainer = styled.div`
  padding: 60px 0 80px 0px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  font-family: ${props => props.theme.fonts[0]};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 88px 0 100px 0px;
    gap: 20px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding: 58px 0 40px 0px;
    flex-direction: row;
    gap: 32px;
  }
`;

const ContainerWrapp = styled.div`
  /* width: 100%; */
`;

const Title = styled.h2`
  margin-bottom: 18px;

  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.text.xl};
  line-height: 1.35;
  letter-spacing: 0.04em;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 40px;
    font-size: ${props => props.theme.fontSizes.headers.s};
    line-height: 1.357;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    margin-bottom: 24px;
  }
`;

const UserContainer = styled.div`
  position: relative;

  padding: 20px 12px 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 42px;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.cardsShadowUser};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 20px 40px 24px 32px;
    margin-left: -32px;
    gap: 0;
    border-radius: 0px 40px 40px 0px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    width: 410px;
    padding: 20px 16px 18px 16px;

    margin-left: -16px;
    gap: 24px;
  }
`;

const styles = { MainContainer, ContainerWrapp, Title, UserContainer };

export default styles;
