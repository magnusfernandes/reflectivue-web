import { Theme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles((theme: Theme) => {
  return {
    navigationBarContainer: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      borderRight: '0.5px solid #eeeff2',
      zIndex: 2,
      padding: '1rem',
      width: '250px',
      backgroundColor: '#fff',
    },
    navBarSection: { display: 'flex', flexDirection: 'column', gap: '10px' },
    sidebarItem: {
      textTransform: 'capitalize',
      textDecoration: 'none',
      borderRadius: '4px',
      transition: '0.3s all ease-out',
      color: '#414b54',
      display: 'flex',
      gap: '20px',
      alignItems: 'center',
      padding: '10px',
      '&:hover': {
        color: '#000',
      },
    },
  };
});
