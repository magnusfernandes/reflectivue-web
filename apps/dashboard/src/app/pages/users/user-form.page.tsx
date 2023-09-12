import Box from '@mui/material/Box';
import {
  Button,
  FormHelperText,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserForm, userRoles } from '../../utils';
import { UserEntrySchema } from './users.utils';
import { NavLink, useParams } from 'react-router-dom';
import { RouterPath } from '../routes-path';
import { useCreateNewUser, useGetUser } from '../../utils/data-hooks';
import { InputPhone } from '@shared-ui';
import { ObjectTypedKeys } from '@shared-helpers';
import { useEffect } from 'react';

export const UserFormPage = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserForm>({
    mode: 'onSubmit',
    resolver: zodResolver(UserEntrySchema),
    defaultValues: {
      email: '',
      name: '',
      phone: '+91',
      role: 'none',
    },
  });
  const createNewUserMutation = useCreateNewUser();
  const { id: userId } = useParams<{ id: string }>();
  const { data: UserData } = useGetUser(userId ?? '');

  useEffect(() => {
    if (UserData) {
      reset({
        email: UserData.email,
        name: UserData.name,
        phone: UserData.phone,
        role: UserData.role,
      });
    }
  }, [UserData]);

  const onSubmit = (data: UserForm) => {
    createNewUserMutation.mutate(data);
  };

  return (
    <Box>
      <Box display={'flex'} gap={1}>
        <NavLink to={RouterPath.users}>
          <Typography fontSize={'18px'} fontWeight={500} color={'textPrimary'}>
            Users
          </Typography>
        </NavLink>
        <Typography fontSize={'18px'} fontWeight={500} color={'textPrimary'}>
          / {UserData ? 'Edit' : 'Create new'} user
        </Typography>
      </Box>

      <Box
        sx={{ height: 520, width: '100%', backgroundColor: 'white' }}
        mt={3}
        p={4}
        borderRadius={'4px'}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box display={'flex'} gap={2} flexDirection={'column'} maxWidth={500}>
            <Box display={'flex'} flexDirection={'column'} gap={1}>
              <Typography variant="body2" color={'textSecondary'}>
                Full Name
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
            <Box display={'flex'} flexDirection={'column'} gap={1}>
              <Typography variant="body2" color={'textSecondary'}>
                Email
              </Typography>
              <Controller
                name="email"
                control={control}
                render={({ field: { ref, onChange, ...field } }) => (
                  <TextField
                    error={!!errors.email}
                    size="small"
                    helperText={errors.email ? errors.email.message : null}
                    onChange={onChange}
                    {...field}
                  />
                )}
              />
            </Box>
            <Box display={'flex'} flexDirection={'column'} gap={1}>
              <Typography variant="body2" color={'textSecondary'}>
                Phone number
              </Typography>
              <Controller
                name="phone"
                control={control}
                render={({ field: { ref, onChange, value, ...field } }) => (
                  <InputPhone
                    size="small"
                    fullWidth
                    value={value}
                    onChange={onChange}
                    defaultCountry={'IN'}
                    error={!!errors.phone}
                    helperText={errors.phone ? errors.phone.message : null}
                    {...field}
                  />
                )}
              />
            </Box>
            <Box display={'flex'} flexDirection={'column'} gap={1}>
              <Typography variant="body2" color={'textSecondary'}>
                Role
              </Typography>
              <Controller
                name="role"
                control={control}
                render={({ field: { ref, onChange, value, ...field } }) => {
                  return (
                    <Select
                      onChange={onChange}
                      size="small"
                      value={value}
                      error={!!errors.role}
                      {...field}
                    >
                      {ObjectTypedKeys(userRoles).map((role) => (
                        <MenuItem value={role}>{userRoles[role]}</MenuItem>
                      ))}
                    </Select>
                  );
                }}
              />
              <FormHelperText error>
                {errors.role ? errors.role.message : null}
              </FormHelperText>
            </Box>
            <Button type="submit" variant="contained" size="medium">
              Save
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};
