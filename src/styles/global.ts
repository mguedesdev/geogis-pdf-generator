import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 900;
    src: url('/fonts/SF-Pro-Display-Black.ttf') format('truetype');
  }

  @font-face {
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 700;
    src: url('/fonts/SF-Pro-Display-Bold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 800;
    src: url('/fonts/SF-Pro-Display-Heavy.ttf') format('truetype');
  }

  @font-face {
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 300;
    src: url('/fonts/SF-Pro-Display-Light.ttf') format('truetype');
  }

  @font-face {
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 500;
    src: url('/fonts/SF-Pro-Display-Medium.ttf') format('truetype');
  }

  @font-face {
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/SF-Pro-Display-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 600;
    src: url('/fonts/SF-Pro-Display-Semibold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 200;
    src: url('/fonts/SF-Pro-Display-Thin.ttf') format('truetype');
  }

  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  * {
    scrollbar-width: thin;
    scroll-behavior: smooth;
    font-family: 'SF Pro Display', sans-serif;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
    appearance: textfield;
  }

  html {
    @media (max-width: 1400px) {
      font-size: 93.75%;
    }
  }

  input, button, textarea {
    font-family: inherit;
  }

  body {
    text-rendering: optimizeLegibility;
  }

  button {
    cursor: pointer;
  }
`;
