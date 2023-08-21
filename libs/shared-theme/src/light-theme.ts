import { createTheme } from '@mui/material';
import { grey, primary, secondary } from './color-tokens';

export const lightTheme = createTheme({
  palette: {
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
