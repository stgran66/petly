import { Button } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import { Form } from 'formik';

const RegisterForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px auto 0;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }
  z-index: 2;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: relative;

    max-width: 608px;
    max-height: 100%;
    padding: 30px 80px;

    background: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.shadows.cardsShadowUser};
    border-radius: 40px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 618px;
    max-height: 100%;
    padding: 60px 80px;
  }
`;

const Title = styled('h1')`
  color: ${prop => prop.theme.colors.text};

  align-items: center;
  text-align: center;

  font-family: ${({ theme }) => theme.fonts[0]};
  font-weight: ${prop => prop.theme.fontWeights.bold};
  font-size: ${prop => prop.theme.fontSizes.headers.xs};
  line-height: ${prop => prop.theme.lineHeights.m};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-family: ${({ theme }) => theme.fonts[0]};
    font-weight: ${prop => prop.theme.fontWeights.medium};
    font-size: ${prop => prop.theme.fontSizes.headers.m};
    line-height: ${prop => prop.theme.lineHeights.s};
  }
`;

const Buttons = styled(Button)(({ theme }) => ({
  width: '100%',
  padding: '8px 0',
  color: theme.colors.text,
  background: theme.colors.white,
  borderRadius: '40px',
  border: `2px solid ${theme.colors.accent}`,
  textTransform: 'none',

  fontFamily: theme.fonts[0],
  fontWeight: theme.fontWeights.medium,
  fontSize: theme.fontSizes.text.xl,
  lineHeight: theme.lineHeights.s,

  ':hover, :focus ': {
    backgroundColor: theme.colors.accent,
    color: theme.colors.whiteText,
  },
}));

const AccountRedirect = styled('p')`
  color: ${prop => prop.theme.colors.placeholderText};

  text-align: center;
  margin-top: 40px;

  font-family: ${prop => prop.theme.fonts[0]};
  font-weight: ${prop => prop.theme.fontWeights.normal};
  font-size: ${prop => prop.theme.fontSizes.text.xs};
  line-height: ${prop => prop.theme.lineHeights.xs};
`;

const LinkLoginRoute = styled(Link)`
  text-decoration: underline;
  color: ${prop => prop.theme.colors.links};
`;

const styles = {
  Title,
  Buttons,
  AccountRedirect,
  LinkLoginRoute,
  RegisterForm,
};

export default styles;
