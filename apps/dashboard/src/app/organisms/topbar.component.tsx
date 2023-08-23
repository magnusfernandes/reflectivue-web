import { Box, IconButton, Typography } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';
import { TwoWayArrowIcon } from '@shared-ui';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpCenter from '@mui/icons-material/HelpCenterRounded';

export const useStyles = makeStyles(() => {
  return {
    main: {
      display: 'flex',
      padding: '1rem',
      width: '100%',
      height: '70px',
      marginLeft: 'auto',
      backgroundColor: '#fff',
      borderBottom: '0.5px solid #eeeff2',
      alignItems: 'center',
    },
    dropdown: {
      border: '0.5px solid #eeeff2',
      borderRadius: '4px',
      backgroundColor: '#f9fafc',
      display: 'flex',
      justifyContent: 'space-between',
      width: '180px',
      alignItems: 'center',
      padding: '5px',
      margin: 'auto',
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
      <Box className={classes.dropdown}>
        <Box>
          <Typography
            noWrap
            fontSize="10px"
            textTransform={'capitalize'}
            fontWeight={'100'}
          >
            Account
          </Typography>
          <Typography noWrap fontSize="12px">
            Margao
          </Typography>
        </Box>
        <Box display={'flex'}>
          <TwoWayArrowIcon />
        </Box>
      </Box>
    </Box>
  );
};
