export const switchStyles = (themePalette: any) => ({
  styleOverrides: {
    root: {
      padding: '2px',
      margin: '0px',
      width: '4.2rem',
      height: '2.6rem',
      '&.MuiSwitch-sizeSmall .MuiSwitch-switchBase': {
        padding: 4,
      },
      '&.MuiSwitch-sizeSmall  .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(1.2rem)',
      },
      '&:hover .MuiSwitch-track': {
        boxShadow: `0 0 0 2px rgba(34, 60, 80, 0.2)`,
      },
    },
    sizeSmall: {
      padding: 2,
      '& .MuiSwitch-thumb': {
        height: '1.2rem',
        width: '1.2rem',
        borderRadius: '4px',
        backgroundColor: '#fff',
        boxShadow: 'none',
      },
    },
    switchBase: {
      padding: 5,
      '&:hover': {
        backgroundColor: 'transparent !important',
      },
      '&.Mui-checked': {
        transform: 'translateX(1.6rem)',
      },
    },
    track: {
      height: '2rem',
      width: '3.6rem',
      borderRadius: 4,
      backgroundColor: `${themePalette?.action?.disabledBackground}`,
      '&': {
        position: 'relative',
      },
      '&::before': {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: 7,
        background: themePalette?.secondary?.contrastText,
        width: 1,
        height: 7,
        color: themePalette?.secondary?.contrastText,
        transform: 'translateY(-50%)',
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        top: '50%',
        right: 4,
        width: 6,
        height: 6,
        border: `1px solid #fff`,
        borderRadius: '100%',
        transform: 'translateY(-50%)',
      },
      '.MuiSwitch-sizeSmall &::after': {
        content: '""',
        position: 'absolute',
        top: '50%',
        right: 4,
        width: 4,
        height: 4,
        border: `1px solid #fff`,
        borderRadius: '100%',
        transform: 'translateY(-50%)',
      },
      '.MuiSwitch-sizeSmall &': { height: '1.6rem', width: '2.8rem' },
      ':not(.Mui-checked).MuiSwitch-colorPrimary + &': {
        opacity: 1.0,
        backgroundColor: `${themePalette?.action?.disabledBackground}`,
      },
      '.Mui-checked.MuiSwitch-colorPrimary + &': {
        opacity: 1.0,
        backgroundColor: themePalette?.primary?.main,
      },
      '.Mui-checked.MuiSwitch-colorSecondary + &': {
        opacity: 1.0,
        backgroundColor: themePalette?.primary?.dark,
      },
      ':not(.Mui-checked).MuiSwitch-colorSecondary + &': {
        opacity: 1.0,
        backgroundColor: `${themePalette?.action?.disabledBackground}`,
      },
      '.Mui-disabled + &&': {
        backgroundColor: `${themePalette?.action?.disabledBackground}`,
      },
    },
    thumb: {
      padding: 0,
      height: '1.4rem',
      width: '1.4rem',
      borderRadius: '4px',
      backgroundColor: '#fff',
      boxShadow: 'none',
    },
  },
});
