import Box from '@mui/material/Box';
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridToolbar,
} from '@mui/x-data-grid';
import { Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { RouterPath } from '../routes-path';
import { SearchInput } from '@shared-ui';

export const UsersPage = () => {
  const rows: GridRowsProp = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
  ];

  const columns: GridColDef[] = [
    { field: 'col1', headerName: 'Name', width: 150 },
    { field: 'col2', headerName: 'Email', width: 150 },
    { field: 'col3', headerName: 'Phone', width: 150 },
    { field: 'col4', headerName: 'Role', width: 150 },
    { field: 'col5', headerName: 'Created On', width: 150 },
    { field: 'col6', headerName: 'Action', width: 150 },
  ];

  return (
    <Box>
      {/* @todo create a common component to display route */}
      <Typography fontSize={'18px'} color={'#3d4d59'} fontWeight={500}>
        Users
      </Typography>
      <Box
        width={'100%'}
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        mt={5}
      >
        <SearchInput />
        <Button
          startIcon={<AddIcon />}
          variant="contained"
          size="small"
          sx={{ marginLeft: 'auto' }}
          href={RouterPath.userNew}
        >
          Add new user
        </Button>
      </Box>
      <Box sx={{ height: 520, width: '100%' }} mt={3}>
        <DataGrid
          rows={rows}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};
