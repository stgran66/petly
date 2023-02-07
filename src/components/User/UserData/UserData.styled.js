import styled from 'styled-components';
import { Camera20Filled } from '@fluentui/react-icons';

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 35px;

  img {
    width: 233px;
    height: 233px;
    margin-bottom: 13px;
    border-radius: 50%;
    background-color: grey;
  }

  label {
    display: flex;
    align-items: center;
    margin-left: auto;
    cursor: pointer;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;

    transition: ${props => props.theme.tranistions.normal};

    &:hover,
    &:focus {
      color: ${props => props.theme.colors.accent};
    }
  }
  input {
    color: transparent;
  }

  /* @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 22px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    margin-bottom: 25px;
  } */
`;

const FotoIcon = styled(Camera20Filled)`
  margin-right: 4px;
  width: 22px;
  height: 22px;
  color: ${props => props.theme.colors.accent};
`;
const styles = { ContainerWrappInfo, ContainerWrappFoto, FotoIcon };
export default styles;
