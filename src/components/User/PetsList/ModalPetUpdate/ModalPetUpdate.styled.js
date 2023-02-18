import { styled } from '@mui/system';
import { Form, Formik, ErrorMessage, Field } from 'formik';

const PetItemUpdateWrapp = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: 280px;

  gap: 20px;
  padding: 16px 20px 40px 20px;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.cardsShadowUser};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: row;
    gap: 32px;
    padding: 20px;
    /* border-radius: 40px; */
    width: 608px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding: 20px 30px 20px 20px;
    width: 800px;
  }
`;

const PetItemUpdatePhotoWrapp = styled('div')`
  position: relative;
  /* margin-left: auto;
  margin-right: auto; */
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

const PetUpdateFoto = styled('img')`
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

const PetInfoUpdateWrapp = styled('div')`
  /* flex-shrink: 0; */
  width: 100%;
  position: relative;
`;

const PetInfoUpdate = styled('ul')`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
  overflow: hidden;

  font-weight: ${props => props.theme.fontWeights.normal};
  font-size: ${props => props.theme.fontSizes.text.s};
  line-height: 1.36;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 35px;
    font-size: ${props => props.theme.fontSizes.text.m};
    line-height: ${props => props.theme.lineHeights.m};
  }

  li {
    white-space: normal;
    word-wrap: break-word;
  }
`;

// ============================================
const ErrorMsg = styled('p')`
  text-align: center;
  margin-top: 5px;
  margin-bottom: 5px;

  color: ${props => props.theme.colors.placeholderText};
  font-weight: ${props => props.theme.fontWeights.normal};
  font-size: ${props => props.theme.fontSizes.text.xs};
  line-height: 1.2;
`;

// ============================================
const ModalDeletePetButtonsGroup = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  font-weight: ${props => props.theme.fontWeights.semiBold};
  font-size: ${props => props.theme.fontSizes.text.m};
  line-height: ${props => props.theme.lineHeights.m};
  letter-spacing: 0.04em;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: row;

    justify-content: center;
    gap: 15px;
    font-size: ${props => props.theme.fontSizes.text.xl};
    line-height: 1.35;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    gap: 24px;
  }
`;

const ButtonCancel = styled('button')`
  display: flex;
  width: 240px;
  padding: 9px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  align-items: stretch;
  border: 2px solid ${props => props.theme.colors.accent};
  background-color: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.white};
  cursor: pointer;

  @media screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 100%;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 180px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
  }
`;

const ButtonUpdate = styled('button')`
  display: flex;
  width: 240px;
  padding: 9px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 2px solid ${props => props.theme.colors.accent};
  /* background-color: transparent; */
  background-color: ${props => props.theme.colors.white};
  cursor: pointer;

  @media screen and (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 100%;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 180px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
  }
`;

const stylesUbdate = {
  PetItemUpdateWrapp,
  PetItemUpdatePhotoWrapp,
  PetUpdateFoto,
  PetInfoUpdateWrapp,
  PetInfoUpdate,

  ErrorMsg,

  ModalDeletePetButtonsGroup,
  ButtonCancel,
  ButtonUpdate,
};

export default stylesUbdate;
