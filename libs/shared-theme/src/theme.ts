import { createTheme, Theme } from '@mui/material/styles';

import { light } from './maps';
import { overrideMap } from './maps/overrides';

export const theme: Theme = createTheme({
  palette: light,
  components: overrideMap(light),
});
