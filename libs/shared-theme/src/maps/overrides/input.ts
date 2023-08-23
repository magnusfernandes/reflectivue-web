export const inputStyles = (themePalette: any) => ({
  styleOverrides: {
    root: {
      '::selection': {
        background: themePalette.primary.main,
      },
    },
    input: {
      '::selection': {
        background: themePalette.primary.main,
      },
    },
  },
});
