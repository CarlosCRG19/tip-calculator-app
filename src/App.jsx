import React from 'react';

import { BillProvider } from 'stores';
import { ThemeProviderWithGlobalStyles } from 'themes';
import { Header, BillForm, TipCalculator } from 'components';

import { Container, Content } from './App.styles.js';

const App = () => {
  return (
    <ThemeProviderWithGlobalStyles>
      <Container>
        <Header/>
        <Content>
          <BillProvider>
            <BillForm />
            <TipCalculator />
          </BillProvider> 
        </Content>
      </Container>
    </ThemeProviderWithGlobalStyles>
  );
};

export default App;
