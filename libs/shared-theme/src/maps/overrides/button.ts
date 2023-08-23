export const buttonStyles = (themePalette: any) => ({
  styleOverrides: {
    containedPrimary: {
      backgroundColor: themePalette.primary?.main,
      boxShadow: 'none',
      '&:hover': {
        backgroundColor: themePalette.primary?.light,
        boxShadow: 'none',
      },
    },
    outlinedPrimary: {
      '&:hover': {
        backgroundColor: themePalette.primary?.light,
      },
    },
    outlinedSecondary: {
      '&:hover': {
        backgroundColor: themePalette.text?.disabled,
      },
    },
    textPrimary: {
      '&:hover': {
        backgroundColor: themePalette.primary?.light,
      },
    },
    textSecondary: {
      '&:hover': {
        backgroundColor: themePalette.text?.disabled,
      },
    },
  },
});
