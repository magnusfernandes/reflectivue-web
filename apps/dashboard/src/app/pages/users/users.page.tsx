import {
  DataGrid,
  GridColDef,
  GridToolbar,
  GridActionsCellItem,
  GridRowId,
} from '@mui/x-data-grid';
import {
  Box,
  Button,
  Chip,
  LinearProgress,
  Typography,
  useTheme,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { RouterPath } from '../routes-path';
import { CommonModal, SearchInput } from '@shared-ui';
import { useDeleteUser, useGetAllUsers } from '../../utils/data-hooks';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import { useNavigate } from 'react-router-dom';
import * as DateFns from 'date-fns';
import { UserRoles } from '../../utils';
import { userRoles } from '../../utils/constants';
import { useModalState } from '@shared-helpers';
import { useState } from 'react';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';

export const UsersPage = () => {
  const { data, isLoading, refetch } = useGetAllUsers();
  const deleteUserMutation = useDeleteUser();
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState<GridRowId>('');
  const { palette } = useTheme();
  const {
    isOpen: isDeleteOpen,
    onClose: onCloseDelete,
    onOpen: onOpenDelete,
  } = useModalState();

  const handleEditClick = (id: GridRowId) => () => {
    navigate(`${RouterPath.userNew}/${id}`);
  };

  const handleDeleteClick = (id: GridRowId) => () => {
    onOpenDelete();
    setSelectedId(id);
  };

  const handleDeleteUser = () => {
    deleteUserMutation.mutateAsync(selectedId as string).then(() => {
      refetch();
      onCloseDelete();
    });
  };

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Name',
      type: 'string',
      flex: 0.3,
    },
    {
      field: 'email',
      headerName: 'Email',
      type: 'string',
      flex: 0.3,
    },
    {
      field: 'phone',
      headerName: 'Phone',
      type: 'string',
      flex: 0.3,
    },
    {
      field: 'role',
      headerName: 'Role',
      type: 'string',
      flex: 0.3,
      renderCell: (field) =>
        field.value ? (
          <Chip
            label={userRoles[field.value as UserRoles]}
            variant={field.value === UserRoles.admin ? 'filled' : 'outlined'}
            color={'primary'}
            sx={{
              width: '100px',
            }}
          />
        ) : (
          ''
        ),
    },
    {
      field: 'createdAt',
      headerName: 'Created On',
      type: 'string',
      flex: 0.3,
      valueFormatter: (field) =>
        field?.value
          ? DateFns.format(new Date(field.value), 'EEEE, MMMM yyyy')
          : '',
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      flex: 0.3,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            icon={<CreateOutlinedIcon sx={{ color: palette.text.secondary }} />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon sx={{ color: palette.text.secondary }} />}
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
          autoHeight
          disableRowSelectionOnClick
          sx={{
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: palette.grey[100],
            },
            '& .MuiDataGrid-toolbarContainer': {
              paddingY: '10px',
              gap: '40px',
            },
            '& .MuiDataGrid-columnHeaderTitle': {
              fontWeight: 600,
            },
          }}
        />
      </Box>
      <CommonModal
        isOpen={isDeleteOpen}
        onClose={onCloseDelete}
        title="Delete user"
      >
        <Box width="347px">
          <Box display={'flex'} alignItems={'center'} gap={2} py={3}>
            <ReportProblemOutlinedIcon
              sx={{
                color: palette.warning.main,
                height: '30px',
                width: '30px',
              }}
            />
            <Typography variant="subtitle1" fontWeight={'medium'}>
              Are you sure you want to delete this user?
            </Typography>
          </Box>
          <Box
            width="100%"
            mt="20px"
            display={'flex'}
            gap={2}
            justifyContent={'flex-end'}
          >
            <Button
              variant="outlined"
              onClick={onCloseDelete}
              size="large"
              fullWidth
            >
              <Typography textTransform={'capitalize'}>Cancel</Typography>
            </Button>
            <Button
              variant="contained"
              onClick={handleDeleteUser}
              size="large"
              fullWidth
            >
              <Typography textTransform={'capitalize'}>Delete</Typography>
            </Button>
          </Box>
        </Box>
      </CommonModal>
    </Box>
  );
};
