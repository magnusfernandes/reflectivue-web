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
  LinearProgress,
  Typography,
  useTheme,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { RouterPath } from '../routes-path';
import { CommonModal, SearchInput } from '@shared-ui';
import { useDeleteDevice, useGetAllDevices } from '../../utils/data-hooks';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import * as DateFns from 'date-fns';
import { useModalState } from '@shared-helpers';
import { useState } from 'react';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';

export const DevicesPage = () => {
  const { data, isLoading, refetch } = useGetAllDevices();
  const deleteDeviceMutation = useDeleteDevice();
  const [selectedId, setSelectedId] = useState<GridRowId>('');
  const { palette } = useTheme();
  const {
    isOpen: isDeleteOpen,
    onClose: onCloseDelete,
    onOpen: onOpenDelete,
  } = useModalState();

  const handleDeleteClick = (id: GridRowId) => () => {
    onOpenDelete();
    setSelectedId(id);
  };

  const handleDeleteDevice = () => {
    deleteDeviceMutation.mutateAsync(selectedId as string).then(() => {
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
      field: 'CreatedAt',
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
            icon={<CreateOutlinedIcon sx={{ color: palette.grey[300] }} />}
            label="Edit"
            className="textPrimary"
            disabled
            color="inherit"
            sx={{
              cursor: 'crosshair',
            }}
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
      <Typography fontSize={'24px'} fontWeight={500} color={'textPrimary'}>
        Devices
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
          href={RouterPath.deviceNew}
        >
          Add new device
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
        title="Delete device"
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
              Are you sure you want to delete this device?
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
              onClick={handleDeleteDevice}
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
