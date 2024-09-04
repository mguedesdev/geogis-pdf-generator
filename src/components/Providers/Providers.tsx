'use client';

import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '@/styles/global';
import { theme } from '@/styles/theme';

import StyledComponentsRegistry from '@/lib/registry';
import { ItemsProvider } from '@/contexts/ItemsContext';

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ItemsProvider>{children}</ItemsProvider>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
