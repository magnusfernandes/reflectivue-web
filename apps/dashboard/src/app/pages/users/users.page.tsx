import {
  DataGrid,
  GridColDef,
  GridToolbar,
  GridActionsCellItem,
  GridRowId,
} from '@mui/x-data-grid';
import { Box, Button, Chip, LinearProgress, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { RouterPath } from '../routes-path';
import { SearchInput } from '@shared-ui';
import { useGetAllUsers } from '../../utils/data-hooks';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import { useNavigate } from 'react-router-dom';
import * as DateFns from 'date-fns';
import { UserRoles } from '../../utils';
import { userRoles } from '../../utils/constants';

export const UsersPage = () => {
  const { data, isLoading, error } = useGetAllUsers();
  const navigate = useNavigate();

  const handleEditClick = (id: GridRowId) => () => {
    navigate(`${RouterPath.userNew}/${id}`);
  };

  const handleDeleteClick = (id: GridRowId) => () => {
    navigate(`${RouterPath.userNew}/id`);
  };

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Name',
      minWidth: 140,
      type: 'string',
    },
    {
      field: 'email',
      headerName: 'Email',
      minWidth: 240,
      type: 'string',
    },
    {
      field: 'phone',
      headerName: 'Phone',
      minWidth: 140,
      type: 'string',
    },
    {
      field: 'role',
      headerName: 'Role',
      minWidth: 180,
      type: 'string',
      renderCell: (field) =>
        field.value ? (
          <Chip
            label={userRoles[field.value as UserRoles]}
            variant={field.value === UserRoles.admin ? 'filled' : 'outlined'}
          />
        ) : (
          ''
        ),
    },
    {
      field: 'createdAt',
      headerName: 'Created On',
      minWidth: 300,
      type: 'string',
      valueFormatter: (field) =>
        field?.value
          ? DateFns.format(new Date(field.value), 'EEEE, MMMM yyyy')
          : '',
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
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
          rows={data ? data : []}
          loading={isLoading}
          slots={{ toolbar: GridToolbar, loadingOverlay: LinearProgress }}
          columns={columns}
        />
      </Box>
    </Box>
  );
};
