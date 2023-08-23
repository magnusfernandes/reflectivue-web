import { Theme, useMediaQuery } from '@mui/material';
import { NavigationBar } from '@shared-ui';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import CorporateFareRoundedIcon from '@mui/icons-material/CorporateFareRounded';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import TabletAndroidRoundedIcon from '@mui/icons-material/TabletAndroidRounded';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import { Box } from '@mui/material';
import Logo from '../../../public/logo.png';
import { TopBar } from '../organisms';
import SettingsIcon from '@mui/icons-material/Settings';
import SupportIcon from '@mui/icons-material/Support';
import LogoutIcon from '@mui/icons-material/Logout';

export interface MenuItem {
  name: string;
  href: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: any;
  prevent?: boolean;
  replacer?: () => void;
}

export const GeneralLayout = () => {
  const menuItems: any[] = [
    {
      title: 'Main Menu',
      items: [
        { name: 'Dashboard', href: '/', icon: SpaceDashboardOutlinedIcon },
        {
          name: 'Organisation',
          href: '/organisation',
          icon: CorporateFareRoundedIcon,
        },
        {
          name: 'Locations',
          href: '/locations',
          icon: SentimentSatisfiedAltOutlinedIcon,
        },
        { name: 'Kiosks', href: '/kiosks', icon: TabletAndroidRoundedIcon },
        { name: 'Devices', href: '/devices', icon: AccountCircleOutlinedIcon },
        { name: 'Users', href: '/users', icon: HubOutlinedIcon },
      ],
    },
    {
      items: [
        { name: 'Settings', href: '/kiosks', icon: SettingsIcon },
        { name: 'Support', href: '/kiosks', icon: SupportIcon },
        { name: 'Logout', href: '/kiosks', icon: LogoutIcon },
      ],
    },
  ];

  return (
    <Box
      overflow="hidden"
      sx={{
        transition: '0.3s all',
        backgroundColor: '#f5f7f9',
        height: '100vh',
      }}
      display={'flex'}
    >
      <NavigationBar menuItems={menuItems} logo={Logo} />
      <Box width={'100%'} height={'100%'}>
        <TopBar />
        <Box
          display={'flex'}
          flexDirection={'column'}
          flexGrow={1}
          pr={'8.5rem'}
          px={'1.5rem'}
          overflow="auto"
          height="calc(100vh - 6.75rem)"
        >
          <Box pb="5rem" width={'calc(100%-180px)'}>
            <Suspense>
              <Outlet />
            </Suspense>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GeneralLayout;
