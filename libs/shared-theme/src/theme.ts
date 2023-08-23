import { createTheme, Theme } from '@mui/material/styles';

import {
  breakpoints,
  light,
  shadows,
  typography,
  spacing,
  shape,
  transitions,
  zIndex,
} from './maps';
import { overrideMap } from './maps/overrides';

export const theme: Theme = createTheme({
  // breakpoints,
  // palette: light,
  // shadows,
  // typography,
  // spacing,
  // shape,
  // transitions,
  // zIndex,
  components: overrideMap(light),
});
