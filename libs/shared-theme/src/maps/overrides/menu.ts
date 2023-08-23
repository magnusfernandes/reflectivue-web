import { shape } from '../shape';
import { shadows } from '../shadows';

export const menuStyles = (themePalette: any) => ({
  styleOverrides: {
    root: {
      boxShadow: 'none',
    },
    paper: {
      boxShadow: `${shadows[1]} !important`,
      borderRadius: shape.borderRadius,
      border: `2px solid ${themePalette.action?.hover}`,
    },
    list: {
      boxShadow: 'none',
      margin: 0,
      padding: 0,
      backgroundColor: '#fff',
    },
  },
});
