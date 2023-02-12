import { styled } from '@mui/system';
import { Form } from 'formik';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const LoginForm = styled(Form)`
  display: grid;
  margin-top: 42px;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: auto;
    margin-top: 276px;
    width: 608px;
    padding: 60px 80px 40px 80px;
    background: #ffffff;
    box-shadow: ${({ theme }) => theme.shadows.cardsShadowUser};
    border-radius: 40px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 618px;
    margin-top: 91px;
    padding: 60px 80px 60px 80px;
    background: #ffffff;
    box-shadow: ${({ theme }) => theme.shadows.cardsShadowUser};
    border-radius: 40px;
  }
`;
const Title = styled('h1')`
  color: ${prop => prop.theme.colors.text};

  align-items: center;
  text-align: center;

  font-family: ${({ theme }) => theme.fonts[0]};
  font-weight: ${prop => prop.theme.fontWeights.bold};
  fon-size: ${prop => prop.theme.fontSizes.headers.xs};
  line-height: ${prop => prop.theme.lineHeights.m};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-family: ${({ theme }) => theme.fonts[0]};
    font-weight: ${prop => prop.theme.fontWeights.medium};
    fon-size: ${prop => prop.theme.fontSizes.headers.m};
    line-height: ${prop => prop.theme.lineHeights.s};
  }

`;

const Buttons = styled(Button)(({ theme }) => ({
  width: '100%',
  padding: '8px 0',

  color: theme.colors.black,
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
    color: theme.colors.white,
  },
}));

const AccountRedirect = styled('p')`
color: ${prop => prop.theme.colors.placeholderText};


text-align: center;
margin-top: 40px;

font-family: ${prop => prop.theme.fonts[0]};
font-weight: ${prop => prop.theme.fontWeights.normal};
fon-size: ${prop => prop.theme.fontSizes.text.xs};
line-height: ${prop => prop.theme.lineHeights.xs};
`;

const LinkRegisterRoute = styled(Link)`
  text-decoration: underline;
  color: ${prop => prop.theme.colors.links};
`;

const Container = styled('div')`
  margin: 40px 0;
`;

const styles = {
  Title,
  Buttons,
  AccountRedirect,
  LinkRegisterRoute,
  LoginForm, 
  Container
};

export default styles