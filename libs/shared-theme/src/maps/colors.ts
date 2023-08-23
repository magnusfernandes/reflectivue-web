import { red } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface CustomColorsI {
    lightRed: string;
    lightYellow: string;
    lightGreen: string;
    darkRed: string;
    darkYellow: string;
    darkGreen: string;
    darkGrey: string;
  }

  interface Palette {
    customColors: CustomColorsI;
    green: {
      main: string;
    };
    border: {
      borderHighlight: string;
    };
  }
  interface PaletteOptions {
    customColors?: CustomColorsI;
    green?: {
      main: string;
    };
    border?: {
      borderHighlight: string;
    };
  }
}

export const light = {
  common: {
    black: '#000',
    white: '#fff',
  },
  type: 'light',
  primary: {
    main: '#ff8f73',
    light: '#f9d0c6',
    dark: '#0e0e4c',
    contrastText: '#fff',
  },
  secondary: {
    main: '#0e0e4c',
    light: '#b6b6c9',
    dark: '#3e3e6f',
    contrastText: '#fff',
  },
  error: {
    light: red[500],
    main: red[500],
    dark: '#d85a5a',
    contrastText: '#fff',
  },
  warning: {
    main: '#ffcc00',
    light: '#ffb547',
    dark: '#c77700',
    contrastText: '#fff',
  },
  info: {
    main: '#7bd3ff',
    light: '#c7e7fe',
    dark: '#7bd3ff',
    contrastText: '#fff ',
  },
  success: {
    main: '#37c8aa',
    light: '#cbfff5',
    dark: '#37c8aa',
    contrastText: '#fff',
  },
  grey: {
    50: '#f6f6f8',
    100: '#f2f2f6',
    200: '#f2f2f6',
    300: '#e6e6ed',
    400: '#8686a5',
    500: '#8686a5',
    600: '#0e0e4c',
    700: '#0e0e4c',
    800: '#0e0e4c',
    900: '#0e0e4c',
    A100: '#e6e6ed',
    A200: '#b6b6c9',
    A400: '#8686a5',
    A700: '#3e3e6f',
  },
  text: {
    primary: '#0e0e4c',
    secondary: '#8686a5',
    disabled: '#e6e6ed',
    hint: 'rgba(14, 14, 76, 0.30)',
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  background: {
    paper: '#fff',
    default: '#f0f0f7',
  },
  action: {
    active: '#8686a5',
    hover: '#f2f2f6',
    hoverOpacity: 0.04,
    selected: '#f6f6f8',
    selectedOpacity: 0.08,
    disabled: '#8686a5',
    disabledBackground: '#e6e6ed',
    disabledOpacity: 0.38,
    focus: '#f2f2f6',
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
  customColors: {
    lightRed: '#F47560',
    lightYellow: '#F1E15B',
    lightGreen: '#97E3D5',
    darkRed: 'rgba(244, 117, 96, 0.5)',
    darkYellow: 'rgba(241, 225, 91, 0.5)',
    darkGreen: 'rgba(151, 227, 213, 0.5)',
    darkGrey: '#f4f4f4',
  },
  green: {
    main: ' #37C8AA',
  },
  border: {
    borderHighlight: '#E6E6ED',
  },
};

export const dark = {
  common: {
    black: '#000',
    white: '#fff',
  },
  type: 'light',
  primary: {
    main: '#ff8f73',
    light: '#f9d0c6',
    dark: '#0e0e4c',
    contrastText: '#fff',
  },
  secondary: {
    main: '#0e0e4c',
    light: '#b6b6c9',
    dark: '#3e3e6f',
    contrastText: '#fff',
  },
  error: {
    light: red[500],
    main: red[500],
    dark: '#d85a5a',
    contrastText: '#fff',
  },
  warning: {
    main: '#ffcc00',
    light: '#ffb547',
    dark: '#c77700',
    contrastText: '#fff',
  },
  info: {
    main: '#7bd3ff',
    light: '#c7e7fe',
    dark: '#7bd3ff',
    contrastText: '#fff ',
  },
  success: {
    main: '#37c8aa',
    light: '#cbfff5',
    dark: '#37c8aa',
    contrastText: '#fff',
  },
  grey: {
    50: '#f6f6f8',
    100: '#f2f2f6',
    200: '#f2f2f6',
    300: '#e6e6ed',
    400: '#8686a5',
    500: '#8686a5',
    600: '#0e0e4c',
    700: '#0e0e4c',
    800: '#0e0e4c',
    900: '#0e0e4c',
    A100: '#e6e6ed',
    A200: '#b6b6c9',
    A400: '#8686a5',
    A700: '#3e3e6f',
  },
  text: {
    primary: '#0e0e4c',
    secondary: '#8686a5',
    disabled: '#e6e6ed',
    hint: 'rgba(14, 14, 76, 0.30)',
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  background: {
    paper: '#fff',
    default: '#f0f0f7',
  },
  action: {
    active: '#8686a5',
    hover: '#f2f2f6',
    hoverOpacity: 0.04,
    selected: '#f6f6f8',
    selectedOpacity: 0.08,
    disabled: '#8686a5',
    disabledBackground: '#e6e6ed',
    disabledOpacity: 0.38,
    focus: '#f2f2f6',
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
  customColors: {
    lightRed: '#F47560',
    lightYellow: '#F1E15B',
    lightGreen: '#97E3D5',
    darkRed: 'rgba(244, 117, 96, 0.5)',
    darkYellow: 'rgba(241, 225, 91, 0.5)',
    darkGreen: 'rgba(151, 227, 213, 0.5)',
    darkGrey: '#f4f4f4',
  },
};
