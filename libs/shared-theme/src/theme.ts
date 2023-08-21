import { createTheme } from '@mui/material';
import { grey, primary, secondary } from './color-tokens';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: primary.main,
    },
    secondary: {
      main: secondary.main,
    },
    grey: {
      '100': grey[100],
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiMenuItem: {
      styleOverrides: {
        selected: primary.main,
      },
    },
    MuiIcon: {
      styleOverrides: {
        colorPrimary: primary.main,
      },
    },
  },
});
export default theme;
