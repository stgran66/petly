import {
  FormControlLabel,
  IconButton,
  Modal,
  Radio,
  RadioGroup,
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

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
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
    min-width: 608px;
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
`;
const ModalInfo = styled('p')`
  font-family: ${({ theme }) => theme.fonts[0]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.text.m};
  line-height: ${({ theme }) => theme.lineHeights.m};
  text-align: center;
  letter-spacing: -0.01em;
  margin-bottom: 20px;
`;

const ModalCategoryGroup = styled(RadioGroup)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  margin-bottom: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 16px;
  }
`;

const ModalCategoryLabel = styled(FormControlLabel)`
  display: flex;
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
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 10px 28px;
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
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts[0]};
  font-size: ${({ theme }) => theme.fontSizes.text.l};
  color: ${({ theme }) => theme.colors.text};
  line-height: ${({ theme }) => theme.lineHeights.l};
  font-weight: ${({ theme }) => theme.fontWeights.medium};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`;

const ModalField = styled(Field)`
  margin-top: 8px;
  padding: 12px 14px;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
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
`;

const ModalBtnWrap = styled('div')`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;
const ModalBtn = styled('button')`
  style-decoration: none;
  padding: 10px 0;
  font-family: ${({ theme }) => theme.fonts[0]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.text.m};
  line-height: ${({ theme }) => theme.lineHeights.m};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: move;
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
    color: ${({ theme }) => theme.colors.white}`;

const ModalRadioGroup = styled(RadioGroup)`
  display: flex;
  flex-direction: row;
  margin-bottom: 32px;
`;
const ModalLabel = styled(FormControlLabel)`
  font-family: ${({ theme }) => theme.fonts[0]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.text.l};
  line-height: ${({ theme }) => theme.lineHeights.l};
  display: flex;
  flex-direction: row;
  color: ${({ theme, checked }) =>
    checked ? theme.colors.accent : theme.colors.black};
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

const AddImageWrap = styled('span')`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  border-radius: 20px;
  height: 116px;
  width: 116px;

  background-color: ${({ theme }) => theme.colors.commonBackground};
`;
const AddImage = styled('img')`
  display: block;
`;

const styles = {
  ModalFile,
  ModalBox,
  ModalTitle,
  ModalInfo,
  ModalBtnWrap,
  ModalBtn,
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
};
export default styles;
