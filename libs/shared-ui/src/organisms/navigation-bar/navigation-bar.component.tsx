import { Box, Divider, Typography, capitalize } from '@mui/material';

import { useStyles } from './navigation-bar.styles';
import { NavLink } from 'react-router-dom';

export interface NavigationBarProps {
  menuItems: any;
  logo: any;
}

export const NavigationBar = ({ menuItems, logo }: NavigationBarProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.navigationBarContainer}>
      <img src={logo} width={'50px'} height={'50px'} />
      <Typography
        fontSize={'10px'}
        color={'#3d4d59'}
        fontWeight={'bold'}
        textTransform={'uppercase'}
        mt={4}
      >
        {menuItems[0].title}
      </Typography>
      <Box className={classes.navBarSection} mt={1}>
        {menuItems[0].items.map((route: any) => (
          <NavLink
            key={route.href}
            to={route.href}
            style={({ isActive }) => ({
              backgroundColor: isActive ? '#e6efff' : '',
              color: isActive ? '#216de8' : '#838a9c',
            })}
            className={classes.sidebarItem}
          >
            <route.icon style={{ fontSize: '16px', color: '#216de8' }} />
            <Typography fontSize={'14px'}>{route.name}</Typography>
          </NavLink>
        ))}
      </Box>
      <Box mt={2} className={classes.navBarSection}>
        <Divider />
        <Typography
          fontSize={'10px'}
          color={'#3d4d59'}
          fontWeight={'bold'}
          mt={1}
          textTransform={'uppercase'}
        >
          {menuItems[1].title}
        </Typography>
        {menuItems[1].items.map((route: any) => (
          <NavLink
            key={route.href}
            to={route.href}
            style={({ isActive }) => ({
              backgroundColor: isActive ? '#e6efff' : '',
              color: isActive ? '#216de8' : '#838a9c',
            })}
            className={classes.sidebarItem}
          >
            <route.icon style={{ fontSize: '16px', color: '#838a9c' }} />
            <Typography fontSize={'14px'}>{route.name}</Typography>
          </NavLink>
        ))}
      </Box>
    </Box>
  );
};

export default NavigationBar;
