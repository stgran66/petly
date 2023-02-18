import { styled } from '@mui/system';
import { Form, Formik, ErrorMessage, Field } from 'formik';

const PetItemUbdateWrapp = styled(Form)`
  display: flex;
  flex-direction: column;

  gap: 20px;
  padding: 16px 20px 40px 20px;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.cardsShadowUser};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: row;
    gap: 32px;
    padding: 20px;
    border-radius: 40px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding: 20px 30px 20px 20px;
  }
`;

const PetItemUpdatePhotoWrapp = styled('div')`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 240px;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.commonBackground};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    max-width: 161px;
    height: 161px;
    border-radius: 40px;
  }

  input {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 240px;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    margin: auto;
    &::-webkit-file-upload-button {
      cursor: pointer;
    }

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      max-width: 161px;
    }
  }
`;

const PetUbdateFoto = styled('img')`
  display: block;
  width: 240px;
  height: 240px;
  border-radius: 20px;
  object-fit: cover;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    max-width: 161px;
    height: 161px;
    border-radius: 40px;
  }
`;

const stylesUbdate = { PetItemUbdateWrapp, PetItemUpdatePhotoWrapp, PetUbdateFoto };

export default stylesUbdate;
