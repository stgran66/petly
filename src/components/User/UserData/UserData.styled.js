import { styled } from '@mui/system';
// import styled from 'styled-components';
import { Camera20Filled } from '@fluentui/react-icons';

import { RiPencilFill } from 'react-icons/ri';
import { BsCheckLg } from 'react-icons/bs';

const UserForm = styled('form')`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  gap: 35px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: row-reverse;
    justify-content: space-between;
    gap: 52px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    flex-direction: column;
    justify-content: none;
    gap: 32px;
  }
`;

const ContainerWrappFoto = styled('div')`
  position: relative;
  display: flex;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
  }

  img {
    width: 233px;
    height: 233px;
    margin-bottom: 13px;
    border-radius: 50%;
    background-color: grey;

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      margin-bottom: 8px;
    }

    @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
      margin-bottom: 0;
    }
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

    @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
`;

const FotoIcon = styled(Camera20Filled)`
  margin-right: 4px;
  width: 22px;
  height: 22px;
  color: ${props => props.theme.colors.accent};
`;

const ContainerWrappInfo = styled('div')`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  gap: 12px;

  /* @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 22px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    margin-bottom: 25px;
  } */
`;
const InfoInputThumb = styled('div')`
  display: flex;

  gap: 8px;
  /* justify-content: space-between; */
`;

const InputWrapp = styled('div')`
  display: flex;
  input {
    width: 80px;
    margin-right: 9px;
    padding: 4px 18px;
    border-radius: 40px;
    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      min-width: 216px;
      margin-right: 24px;
    }

    @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    }
  }
`;

const ButtonWrapp = styled('button')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${props => props.theme.colors.commonBackground};
`;

const InfoChangeIcon = styled(RiPencilFill)`
  width: 12px;
  height: 12px;
  color: ${props => props.theme.colors.placeholderText};
  transition: ${props => props.theme.tranistions.normal};
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accent};
  }
`;

const InfoSubmitIcon = styled(BsCheckLg)`
  width: 12px;
  height: 12px;
  color: ${props => props.theme.colors.placeholderText};
  transition: ${props => props.theme.tranistions.normal};
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accent};
  }
`;

const styles = {
  UserForm,
  ContainerWrappInfo,
  ContainerWrappFoto,
  FotoIcon,
  InputWrapp,
  InfoInputThumb,
  ButtonWrapp,
  InfoChangeIcon,
  InfoSubmitIcon,
};
export default styles;
