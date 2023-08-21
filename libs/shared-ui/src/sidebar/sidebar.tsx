import styled from 'styled-components';
import {
  Sidebar as ReactProSideBar,
  Menu,
  MenuItem,
  SubMenu,
} from 'react-pro-sidebar';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import CorporateFareRoundedIcon from '@mui/icons-material/CorporateFareRounded';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import TabletAndroidRoundedIcon from '@mui/icons-material/TabletAndroidRounded';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';

const StyledSidebar = styled.div``;

export function Sidebar() {
  return (
    <StyledSidebar>
      <ReactProSideBar style={{ backgroundColor: 'white' }}>
        <Menu>
          <MenuItem icon={<SpaceDashboardOutlinedIcon />}>Dashboard</MenuItem>
          <SubMenu label="Organizations" icon={<CorporateFareRoundedIcon />}>
            <MenuItem>Organisation list</MenuItem>
            <MenuItem>New organisation</MenuItem>
          </SubMenu>
          <MenuItem icon={<HubOutlinedIcon />}> Locations </MenuItem>
          <MenuItem icon={<SentimentSatisfiedAltOutlinedIcon />}>
            Kiosks
          </MenuItem>
          <MenuItem icon={<TabletAndroidRoundedIcon />}> Devices </MenuItem>
          <MenuItem icon={<AccountCircleOutlinedIcon />}> Users </MenuItem>
        </Menu>
      </ReactProSideBar>
    </StyledSidebar>
  );
}

export default Sidebar;
