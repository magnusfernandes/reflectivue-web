import { Box, Typography } from '@mui/material';

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
        fontSize={'14px'}
        color={'#3d4d59'}
        fontWeight={'semibold'}
        mt={2}
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
      <Box mt={'auto'} className={classes.navBarSection}>
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
