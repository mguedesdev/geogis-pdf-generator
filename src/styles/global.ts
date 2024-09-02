import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 300;
    src: url('/fonts/Ubuntu-Light.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/Ubuntu-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 500;
    src: url('/fonts/Ubuntu-Medium.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 700;
    src: url('/fonts/Ubuntu-Bold.ttf') format('truetype');
  }

  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  * {
      scrollbar-width: thin;
      scroll-behavior: smooth;
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
    font-family: 'Ubuntu', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
