export const theme = {
  colors: {
    background: '#EAEAEA',
    primary: '#038BBB',
    primaryLight: '#8BC9E9',
    primaryDark: '#0078A7',
    white: '#FFFFFF',
    black: '#262626',
    placeholder: '#E0E1E6',
    text: '#262626',
    error: '#DE3737',
    errorLight: '#FFD2D2',
    success: '#2DAC3E',
    successLight: '#ABDEB1',
    warning: '#F1DE3B',
    warningLight: '#FFFACB',
  },
} as const;

export type ThemeType = typeof theme;
