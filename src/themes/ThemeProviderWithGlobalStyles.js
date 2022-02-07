import React from 'react';

import { createGlobalStyle, css, ThemeProvider } from 'styled-components';

const tipCalculatorTheme = {
  typography: {
    fontFamily: "'Space Mono', monospace",
    fontSize: '24px',
    fontWeight: {
      regular: 400,
      bold: 700,
    },
  },
  breakpoints: {
    mobile: '375px',
    desktop: '1440px',
  },
  colors: {
    strongCyan: '#26c0ab',
    veryDarkCyan: '#00494d',
    darkGrayishCyan1: '#5e7a7d',
    darkGrayishCyan2: '#7f9c9f',
    lightGrayishCyan1: '#c5e4e7',
    lightGrayishCyan2: '#f4fafa',
    brown: '#d88770',
    white: '#fff',
  },
};

const GlobalStyle = createGlobalStyle`
  body { 
    margin: 0;
      
    ${({ theme }) => css`
      font-size: ${theme.typography.fontSize};
      font-family: ${theme.typography.fontFamily};
      background-color: ${theme.colors.lightGrayishCyan1};
    `}

    input, textarea, button {
      font-family: inherit;
    }
  }
`;

const ThemeProviderWithGlobalStyles = ({ children }) => {
  return (
    <ThemeProvider theme={tipCalculatorTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderWithGlobalStyles;
