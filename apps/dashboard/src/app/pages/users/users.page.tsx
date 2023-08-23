import * as React from 'react';
import Box from '@mui/material/Box';
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridToolbar,
} from '@mui/x-data-grid';
import { Typography } from '@mui/material';

export const UsersPage = () => {
  const rows: GridRowsProp = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
  ];

  const columns: GridColDef[] = [
    { field: 'col1', headerName: 'Column 1', width: 150 },
    { field: 'col2', headerName: 'Column 2', width: 150 },
  ];

  return (
    <Box>
      {/* @todo create a common component to display route */}
      <Typography fontSize={'16px'} color={'#3d4d59'}>
        Users
      </Typography>
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
