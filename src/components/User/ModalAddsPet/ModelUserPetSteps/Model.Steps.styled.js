import { styled } from '@mui/system';
import { Form, Field } from 'formik';

const FormWrapp = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const FormInputWrapp = styled('div')`
  /* @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 22px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    margin-bottom: 25px;
  } */
`;

const ButtonsGroup = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.text.m};
  line-height: ${props => props.theme.lineHeights.m};
  letter-spacing: 0.04em;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: row-reverse;
    justify-content: center;
    gap: 20px;
    font-size: ${props => props.theme.fontSizes.text.xl};
    line-height: 1.35;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    gap: 24px;
  }
`;

const ButtonAccent = styled('button')`
  width: 240px;
  padding: 9px;
  border-radius: 40px;
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

const ButtonWhite = styled('button')`
  width: 240px;
  padding: 9px;
  border-radius: 40px;
  border: 2px solid ${props => props.theme.colors.accent};
  background-color: transparent;
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

const styles = {
  FormWrapp,
  FormInputWrapp,
  ButtonsGroup,
  ButtonWhite,
  ButtonAccent,
};

export default styles;
