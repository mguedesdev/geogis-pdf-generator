'use client';

import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '@/styles/global';
import { theme } from '@/styles/theme';

import StyledComponentsRegistry from '@/lib/registry';
import { ItemsProvider } from '@/services/ItemsContext';

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ItemsProvider>
      <StyledComponentsRegistry>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </StyledComponentsRegistry>
    </ItemsProvider>
  );
};

export default Providers;
