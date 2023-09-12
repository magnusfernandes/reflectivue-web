import Box from '@mui/material/Box';
import {
  Button,
  FormHelperText,
  MenuItem,
  Select,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserForm, userRoles } from '../../utils';
import { UserEntrySchema } from './users.utils';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { RouterPath } from '../routes-path';
import {
  useCreateNewUser,
  useDeleteUser,
  useGetUser,
  useUpdateUser,
} from '../../utils/data-hooks';
import { CommonModal, InputPhone } from '@shared-ui';
import { ObjectTypedKeys, useModalState } from '@shared-helpers';
import { useEffect } from 'react';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';

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
  const updateUserMutation = useUpdateUser();
  const { id: userId } = useParams<{ id: string }>();
  const deleteUserMutation = useDeleteUser();
  const { data: UserData } = useGetUser(userId ?? '');
  const navigate = useNavigate();
  const { palette } = useTheme();

  const {
    isOpen: isDeleteOpen,
    onClose: onCloseDelete,
    onOpen: onOpenDelete,
  } = useModalState();

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
    if (UserData && userId) {
      updateUserMutation.mutate({
        formData: data,
        id: userId,
      });
      return;
    }
    createNewUserMutation.mutate(data);
  };

  const handleDeleteUser = () => {
    if (userId) {
      deleteUserMutation.mutateAsync(userId).then(() => {
        navigate(RouterPath.users);
        onCloseDelete();
      });
    }
  };

  return (
    <Box>
      <Box display={'flex'} gap={1}>
        <NavLink to={RouterPath.users}>
          <Typography fontSize={'24px'} fontWeight={500} color={'textPrimary'}>
            Users
          </Typography>
        </NavLink>
        <Typography fontSize={'24px'} fontWeight={500} color={'textPrimary'}>
          / {UserData ? 'Edit' : 'Create new'} user
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
            {UserData ? 'Edit' : 'Create new'} user
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
            <Box display={'flex'} justifyContent={'space-between'} gap={3}>
              {userId && (
                <Button
                  onClick={onOpenDelete}
                  variant="outlined"
                  color="error"
                  sx={{ width: '200px' }}
                  startIcon={<DeleteIcon sx={{ color: palette.error.main }} />}
                >
                  <Typography textTransform={'none'}>Delete</Typography>
                </Button>
              )}
              <Button type="submit" variant="contained" size="medium" fullWidth>
                <Typography textTransform={'none'}>
                  {userId ? 'Save changes' : 'Create user'}
                </Typography>
              </Button>
            </Box>
          </Box>
        </form>
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
