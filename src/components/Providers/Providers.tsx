'use client';

import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '@/styles/global';
import { theme } from '@/styles/theme';

import StyledComponentsRegistry from '@/lib/registry';
import { ItemsProvider } from '@/contexts/ItemsContext';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ItemsProvider>{children}</ItemsProvider>
        <ToastContainer position="top-right" autoClose={999999} />
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
