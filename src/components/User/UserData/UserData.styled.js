import styled from 'styled-components';

const ContainerWrappInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  /* @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 22px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    margin-bottom: 25px;
  } */
`;

const ContainerWrappFoto = styled.div`
  margin-bottom: 35px;
  img {
    width: 233px;
    height: 233px;
    border-radius: 50%;
    background-color: grey;
  }

  /* @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 22px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    margin-bottom: 25px;
  } */
`;
const styles = { ContainerWrappInfo, ContainerWrappFoto };
export default styles;
