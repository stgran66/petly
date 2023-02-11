import React from 'react';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/system';

const theme = createTheme({
  breakpoints: {
    mobile: `320px`,
    tablet: `768px`,
    desktop: `1280px`,
  },
  colors: {
    accent: '#F59256',
    pageBackground: '#7F7F7F',
    commonBackground: '#FDF7F2',
    cardsBackground: '#D9D9D9',
    text: '#111111',
    newsText: '#111321',
    placeholderText: 'rgba(17, 17, 17, 0.6)',
    links: '#3091EB',
    white: '#FFFFFF',
    navLinks: '#181C27',
    black: '#000000',
    focusTextFields: '#FF6101',
    
  },
  gradients: {
    backgroundGradient: 'linear-gradient(90deg, #FF634E 0%, #FFDF48 105.44%)',
  },
  shadows: {
    cardsShadow: '7px 4px 14px rgba(49, 21, 4, 0.07)',
    cardsShadowUser: '7px 4px 14px rgba(0, 0, 0, 0.11)',
    timeModalShadow: '4px 4px 8px rgba(0, 0, 0, 0.25)',
  },
  fonts: ['Manrope', 'Poppins'],
  fontSizes: {
    headers: {
      xl: '68px',
      l: '48px',
      m: '36px',
      s: '28px',
      xs: '24px',
    },
    navLinks: {
      desktop: '20px',
      tablet: '48px',
      mobile: '32px',
    },
    logo: { desktop: '32px', mobile: '28px' },
    text: {
      xl: '20px',
      l: '18px',
      m: '16px',
      s: '14px',
      xs: '12px',
    },
  },
  lineHeights: {
    xl: 1.5,
    l: 1.47,
    m: 1.375,
    s: 1.366,
    xs: 1.33,
  },
  fontWeights: {
    bold: 700,
    semiBold: 600,
    medium: 500,
    normal: 400,
  },
  transitions: {
    long: 'all 500ms linear',
    normal: 'all 250ms linear',
    short: 'all 100ms linear',
  },
});

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
