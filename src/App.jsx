import React from 'react';

import { BillProvider } from 'stores';
import { BillInput, TipCalculator } from 'components';
import { ThemeProviderWithGlobalStyles } from 'themes';

const App = () => {
  return (
    <ThemeProviderWithGlobalStyles>
      <BillProvider>
        <BillInput />
        <TipCalculator />
      </BillProvider>
    </ThemeProviderWithGlobalStyles>
  );
};

export default App;
