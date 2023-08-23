export const menuItemStyles = (themePalette: any) => ({
  styleOverrides: {
    root: {
      '&.Mui-selected': {
        background: '#fff',
        '&:focus': {
          background: '#fff',
        },
        '&:hover': {
          backgroundColor: themePalette.action?.hover,
        },
      },
      '&:focus': {
        backgroundColor: '#fff',
      },
      '&:hover': {
        backgroundColor: themePalette.action?.hover,
      },
      boxShadow: 'none',
      height: '40px',
    },
  },
});
