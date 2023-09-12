import Box from '@mui/material/Box';
import { Button, TextField, Typography, useTheme } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { DeviceForm } from '../../utils';
import { NavLink } from 'react-router-dom';
import { RouterPath } from '../routes-path';
import { useCreateNewDevice } from '../../utils/data-hooks';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export const DeviceFormPage = () => {
  const deviceEntrySchema = zod
    .object({
      name: zod
        .string({
          invalid_type_error: 'Please enter name',
          required_error: 'Please enter name',
        })
        .min(3, 'Device name should be atleast 3 charactes in length!'),
    })
    .required();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<DeviceForm>({
    mode: 'onSubmit',
    resolver: zodResolver(deviceEntrySchema),
    defaultValues: {
      name: '',
    },
  });
  const createNewDeviceMutation = useCreateNewDevice();
  const { palette } = useTheme();

  const onSubmit = (data: DeviceForm) => {
    createNewDeviceMutation.mutate(data);
  };

  return (
    <Box>
      <Box display={'flex'} gap={1}>
        <NavLink to={RouterPath.users}>
          <Typography fontSize={'24px'} fontWeight={500} color={'textPrimary'}>
            Devices
          </Typography>
        </NavLink>
        <Typography fontSize={'24px'} fontWeight={500} color={'textPrimary'}>
          / Create
        </Typography>
      </Box>
      <Box
        sx={{
          height: 'fit-content',
          width: '100%',
          maxWidth: '500px',
          backgroundColor: 'white',
          marginX: 'auto',
          borderRadius: '8px',
        }}
        mt={3}
        p={4}
        borderRadius={'4px'}
      >
        <Box mb={'2rem'}>
          <Typography fontSize={'22px'} fontWeight={500} color={'textPrimary'}>
            Create new device
          </Typography>
          <Typography
            fontSize={'14px'}
            color={palette.text.disabled}
            display={'flex'}
            gap={1}
          >
            <Typography color={palette.error.main}>*</Typography> All fields are
            mandatory
          </Typography>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box display={'flex'} gap={4} flexDirection={'column'} maxWidth={500}>
            <Box display={'flex'} flexDirection={'column'} gap={1}>
              <Typography variant="body2" color={'textSecondary'}>
                Name
              </Typography>
              <Controller
                name="name"
                control={control}
                render={({ field: { ref, onChange, ...field } }) => (
                  <TextField
                    error={!!errors.name}
                    size="small"
                    helperText={errors.name ? errors.name.message : null}
                    onChange={onChange}
                    {...field}
                  />
                )}
              />
            </Box>
            <Button type="submit" variant="contained" size="medium" fullWidth>
              <Typography textTransform={'none'}>Create device</Typography>
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};
