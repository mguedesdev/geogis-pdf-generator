'use client';

import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '@/styles/global';
import { theme } from '@/styles/theme';

import StyledComponentsRegistry from '@/lib/registry';

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
