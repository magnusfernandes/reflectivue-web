export const listItemStyles = (themePalette: any) => ({
  styleOverrides: {
    root: {
      borderBottom: `1px solid ${themePalette.action?.hover}`,
    },
  },
});
