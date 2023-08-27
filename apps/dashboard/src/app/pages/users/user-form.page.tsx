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
import { NavLink } from 'react-router-dom';
import { RouterPath } from '../routes-path';
import { useCreateNewUser } from '../../utils/data-hooks';
import { InputPhone } from '@shared-ui';
import { ObjectTypedKeys } from '@shared-helpers';

export const UserFormPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserForm>({
    mode: 'onSubmit',
    resolver: zodResolver(UserEntrySchema),
  });
  const createNewUserMutation = useCreateNewUser();

  const onSubmit = (data: UserForm) => {
    createNewUserMutation.mutate(data);
  };

  console.log(errors);

  return (
    <Box>
      <Typography fontSize={'18px'} fontWeight={500}>
        <NavLink to={RouterPath.users}>Users</NavLink> / Create new user
      </Typography>
      <Box
        sx={{ height: 520, width: '100%', backgroundColor: 'white' }}
        mt={3}
        p={4}
        borderRadius={'4px'}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box display={'flex'} gap={2} flexDirection={'column'} maxWidth={500}>
            <Box display={'flex'} flexDirection={'column'} gap={1}>
              <Typography variant="body2">Full Name</Typography>
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
              <Typography variant="body2">Email</Typography>
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
              <Typography variant="body2">Phone number</Typography>
              <Controller
                name="phone"
                control={control}
                render={({ field: { ref, onChange, ...field } }) => (
                  <InputPhone
                    {...field}
                    size="small"
                    fullWidth
                    onChange={onChange}
                    defaultCountry={'IN'}
                    error={!!errors.phone}
                    helperText={errors.phone ? errors.phone.message : null}
                  />
                )}
              />
            </Box>
            <Box display={'flex'} flexDirection={'column'} gap={1}>
              <Typography variant="body2">Role</Typography>
              <Controller
                name="role"
                control={control}
                render={({ field: { ref, onChange, ...field } }) => (
                  <Select
                    {...field}
                    onChange={onChange}
                    size="small"
                    error={!!errors.role}
                  >
                    {ObjectTypedKeys(userRoles).map((role) => (
                      <MenuItem value={role}>{userRoles[role]}</MenuItem>
                    ))}
                  </Select>
                )}
              />
              <FormHelperText error>
                {errors.role ? errors.role.message : null}
              </FormHelperText>
            </Box>
            <Button type="submit" variant="contained" size="small">
              Save
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};
