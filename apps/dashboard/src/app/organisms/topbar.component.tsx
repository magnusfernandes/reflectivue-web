import { Box, Typography } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles(() => {
  return {
    main: {
      padding: '1rem',
      width: '100%',
      height: '70px',
      marginLeft: 'auto',
      backgroundColor: '#fff',
      borderBottom: '0.5px solid #eeeff2',
    },
  };
});

export const TopBar = () => {
  const classes = useStyles();
  return (
    <Box className={classes.main}>
      <Box>
        <Typography fontSize={'12px'} color={'#3d4d59'}>
          Welcome
        </Typography>
        <Typography fontSize={'14px'} color={'#3d4d59'}>
          Broklyn Simmons
        </Typography>
      </Box>
    </Box>
  );
};
