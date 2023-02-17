import {
  FormControlLabel,
  IconButton,
  Modal,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import { Box, styled } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import { Field } from 'formik';

const ModalBackdrop = styled(Modal)`
  padding: 158px 20px 0;
  display: flex;
  justify-content: center;
  background-color: rgba(17, 17, 17, 0.6);
  backdrop-filter: blur(10px);
  overflow-y: scroll;
  z-index: 20000;
  '& .css-i9fmh8-muibackdrop-root-muimodal-backdrop': {
    opacity: 0;
  }
`;
const ModalBox = styled(Box)`
  padding: 40px 20px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  min-width: 280px;
  margin-bottom: 60px;

  background: ${({ theme }) => theme.colors.white};

  border-radius: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-left: 80px;
    padding-right: 80px;
    width: 608px;
  }
`;
const InputButton = styled(IconButton)`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 34px;
  height: 34px;
  padding: 8px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.commonBackground};
  transition: ${({ theme }) => theme.transitions.normal};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.white};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const IconClose = styled(CloseIcon)`
  fill: currentColor;
`;
const ModalTitle = styled('h2')`
  font-family: ${({ theme }) => theme.fonts[0]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.headers.xs};
  line-height: ${({ theme }) => theme.lineHeights.xs};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  margin-bottom: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    font-size: ${({ theme }) => theme.fontSizes.headers.m};
    line-height: ${({ theme }) => theme.lineHeights.s};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-bottom: 40px;
  }
`;
const ModalInfo = styled('p')`
  font-family: ${({ theme }) => theme.fonts[0]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.text.m};
  line-height: ${({ theme }) => theme.lineHeights.m};
  text-align: center;
  letter-spacing: -0.01em;
  margin-bottom: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.text.xl};
  }
`;

const ModalCategoryGroup = styled(RadioGroup)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;

  margin-bottom: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 16px;
  }
`;

const ModalCategoryLabel = styled(FormControlLabel)`
  display: flex;
  position: relative;
  align-items: center;
  height: 35px;
  padding: 8px 28px;
  margin: 0;
  margin-bottom: 12px;
  &:not(:last-child) {
    margin-right: 12px;
  }
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.text.s};
  border: 2px solid ${({ theme }) => theme.colors.accent};
  border-radius: 40px;
  background-color: ${({ theme, checked }) =>
    checked ? theme.colors.accent : theme.colors.white};
  color: ${({ theme, checked }) =>
    checked ? theme.colors.white : theme.colors.text};
  transition: ${({ theme }) => theme.transitions.normal};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.text.xl};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 10px 28px;
    margin-bottom: 16px;
    line-height: ${({ theme }) => theme.lineHeights.s};
    font-size: ${({ theme }) => theme.fontSizes.text.xl};
  }
`;

const ModalCategoryField = styled(Radio)`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

const ModalFieldLabel = styled('label')`
  position: relative;
  display: flex;
  position: relative;
  flex-direction: column;
  margin-bottom: 16px;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts[0]};
  font-size: ${({ theme }) => theme.fontSizes.text.l};
  color: ${({ theme }) => theme.colors.text.black};
  line-height: ${({ theme }) => theme.lineHeights.l};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  & span:after {
    content: '*';
    color: ${({ theme }) => theme.colors.errorColor};
    position: absolute;
    margin-left: 4px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 28px;
    line-height: 1.1;
    font-size: ${({ theme }) => theme.fontSizes.headers.xs};
  }
`;

const ModalField = styled(Field)`
  margin-top: 8px;
  padding: 12px 14px;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  font-size: ${({ theme }) => theme.fontSizes.text.s};
  background-color: ${({ theme }) => theme.colors.commonBackground};
  color: ${({ theme }) => theme.colors.text};
  line-height: ${({ theme }) => theme.lineHeights.s};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  transition: ${({ theme }) => theme.transitions.normal};
  outline: none;

  &::placeholder {
    padding: 12px 0;
    color: rgba(27, 27, 27, 0.6);
  }
  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 12px 16px;
    margin-top: 12px;
    line-height: ${({ theme }) => theme.lineHeights.xl};
    font-size: ${({ theme }) => theme.fontSizes.text.m};
  }
`;

const ModalBtnWrap = styled('div')`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  position: relative;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row-reverse;
    justify-content: center;
  }
`;
const ModalBtn = styled('button')`
  position: relative;
  padding: 10px 0;
  font-family: ${({ theme }) => theme.fonts[0]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.text.m};
  line-height: ${({ theme }) => theme.lineHeights.m};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  letter-spacing: 0.04em;
  border: 2px solid ${({ theme }) => theme.colors.accent};
  border-radius: 40px;
  color: ${({ theme, active }) =>
    active ? theme.colors.white : theme.colors.black};
  background-color: ${({ theme, active }) =>
    active ? theme.colors.accent : theme.colors.white};

  transition: ${({ theme }) => theme.transitions.normal};

  &:not(:last-child) {
    margin-bottom: 12px;
  }
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.white};
  }

  // &:disabled,
  // button[disabled='disabled'] {
  //   border: 1px solid #999999 !important;
  //   background-color: #cccccc !important;
  //   color: #666666 !important;
  // }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.text.xl};
    line-height: ${({ theme }) => theme.lineHeights.s};
    &:not(:last-child) {
      margin-left: 20px;
    }
    &:not(:last-child) {
      margin-bottom: 0;
    }
    width: 180px;
    letter-spacing: 0.04em;
  }
`;

const ModalRadioGroup = styled(RadioGroup)`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  position: relative;
`;

const RadioWrap = styled('div')`
  display: flex;
  flex-direction: column;
  &:not(:last-child) {
    margin-right: 40px;
  }
`;

const RadiImg = styled('img')`
  display: block;
  margin-bottom: 10px;
  width: 40px;
  height: auto;
`;

const ModalLabel = styled(FormControlLabel)`
  font-family: ${({ theme }) => theme.fonts[0]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.text.l};
  line-height: ${({ theme }) => theme.lineHeights.l};
  display: flex;
  margin: 0;
  flex-direction: row;

  color: ${({ theme, checked }) =>
    checked ? theme.colors.accent : theme.colors.black};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    line-height: 1.1;
    font-size: ${({ theme }) => theme.fontSizes.headers.xs};
  }
`;

const LabelText = styled(Typography)`
  font-family: ${({ theme }) => theme.fonts[0]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.text.l};
  line-height: ${({ theme }) => theme.lineHeights.l};
  color: inherit;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.text.xl};
    line-height: ${({ theme }) => theme.lineHeights.xs};
  }
`;
const ModalSexField = styled(Radio)`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;
const ModalFile = styled('input')`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

const AddImageWrap = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  border-radius: 20px;
  height: 116px;
  width: 116px;

  background-color: ${({ theme }) => theme.colors.commonBackground};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 140px;
    width: 140px;
    margin-top: 12px;
    margin-bottom: 4px;
  }
`;

const PetImg = styled('img')`
  height: 116px;
  width: 116px;
  border-radius: 20px;
  margin-top: 8px;
  object-fit: cover;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 140px;
    width: 140px;
    margin-top: 12px;
    margin-bottom: 8px;
  }
`;
const AddImage = styled('img')`
  display: block;
`;

const ModalTextarea = styled(Field)`
  margin-top: 8px;
  padding: 12px 14px;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  min-height: 20px;
  resize: none;
  background-color: ${({ theme }) => theme.colors.commonBackground};
  color: ${({ theme }) => theme.colors.text.black};
  line-height: ${({ theme }) => theme.lineHeights.xl};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: ${({ theme }) => theme.fontSizes.text.s};
  transition: ${({ theme }) => theme.transitions.normal};
  outline: none;
  &::placeholder {
    color: rgba(27, 27, 27, 0.6);
  }
  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 116px;
    padding: 16px 18px;
  }
`;
const ErrorMessage = styled('span')`
  position: absolute;
  bottom: -20px;
  left: 12px;
  align-items: center;
  color: ${({ theme }) => theme.colors.errorColor};
  line-height: ${({ theme }) => theme.lineHeights.xl};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: 11px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.text.xs};
  }
`;

const ErrorDesc = styled('span')`
  position: absolute;
  top: -20px;
  left: 12px;

  color: ${({ theme }) => theme.colors.errorColor};
  line-height: ${({ theme }) => theme.lineHeights.xl};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: ${({ theme }) => theme.fontSizes.text.xs};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    top: -28px;
    left: 0;
    align-items: left;
    font-size: ${({ theme }) => theme.fontSizes.text.s};
  }
`;

const styles = {
  ModalFile,
  ModalBox,
  ModalTitle,
  ModalInfo,
  ModalBtnWrap,
  ModalBtn,
  ErrorMessage,
  ModalCategoryGroup,
  ModalCategoryLabel,
  InputButton,
  IconClose,
  ModalCategoryField,
  ModalFieldLabel,
  ModalField,
  ModalRadioGroup,
  ModalSexField,
  ModalLabel,
  ModalBackdrop,
  AddImageWrap,
  AddImage,
  RadioWrap,
  RadiImg,
  ModalTextarea,
  PetImg,
  LabelText,
  ErrorDesc,
};
export default styles;
