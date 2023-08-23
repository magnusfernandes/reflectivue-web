import { accordionStyles } from './accordion';
import { backdropStyles } from './backdrop';
import { buttonStyles } from './button';
import { dialogStyles } from './dialog';
import { formLabelStyles } from './formLabel';
import { inputStyles } from './input';
import { listItemStyles } from './listItem';
import { menuStyles } from './menu';
import { menuItemStyles } from './menuItem';
import { paperStyles } from './paper';
import { selectStyles } from './select';
import { switchStyles } from './switch';
import { tooltipStyles } from './tooltip';
import { typographyStyles } from './typography';

export const overrideMap = (themePalette: any) => ({
  MuiButton: buttonStyles(themePalette),
  MuiMenu: menuStyles(themePalette),
  MuiMenuItem: menuItemStyles(themePalette),
  MuiListItem: listItemStyles(themePalette),
  MuiSelect: selectStyles(themePalette),
  MuiSwitch: switchStyles(themePalette),
  MuiTooltip: tooltipStyles(themePalette),
  MuiFormLabel: formLabelStyles(themePalette),
  MuiTypography: typographyStyles(themePalette),
  MuiBackdrop: backdropStyles(themePalette),
  MuiPaper: paperStyles(themePalette),
  MuiDialog: dialogStyles(themePalette),
  MuiAccordion: accordionStyles(),
  MuiInputBase: inputStyles(themePalette),
});
