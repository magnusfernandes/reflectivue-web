import {
  ArrowDownward,
  ChevronRight,
  ChevronRightSharp,
} from '@mui/icons-material';
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  MenuProps,
  Typography,
  styled,
} from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';
import { TwoWayArrowIcon } from '@shared-ui';
import { useState } from 'react';
import { useValidate } from '../utils/data-hooks/auth';

export const useStyles = makeStyles(() => {
  return {
    main: {
      display: 'flex',
      padding: '1rem 2rem',
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
      cursor: 'pointer',
    },
  };
});

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    marginTop: theme.spacing(1),
    width: '180px',
  },
}));

export const TopBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { data } = useValidate();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className={classes.main}>
      <Box className={classes.dropdown} onClick={handleClick}>
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
      <Box display={'flex'} alignItems={'center'} gap={1}>
        <Avatar
          sx={{
            width: '30px',
            height: '30px',
            fontSize: '14px',
          }}
        >
          {data?.name[0]}
        </Avatar>
        <Box>
          <Typography fontSize={'12px'} color={'#3d4d59'}>
            {data?.name || ''}
          </Typography>
          <Typography fontSize={'10px'} color={'#b2b4b6'}>
            {data?.email || ''}
          </Typography>
        </Box>
      </Box>
      <StyledMenu
        id="basic-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Typography fontSize="12px">option 1</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography fontSize="12px">option 1</Typography>
        </MenuItem>
      </StyledMenu>
    </Box>
  );
};
