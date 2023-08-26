import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { UsersForm } from '../../utils';
import { UserEntrySchema } from './users.utils';
import { NavLink } from 'react-router-dom';
import { RouterPath } from '../routes-path';

export const UserFormPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UsersForm>({
    mode: 'onSubmit',
    resolver: zodResolver(UserEntrySchema),
  });

  return (
    <Box>
      {/* @todo create a common component to display route */}
      <Typography fontSize={'18px'} fontWeight={500}>
        <NavLink to={RouterPath.users}>Users</NavLink> / Create new user
      </Typography>
      <Box sx={{ height: 520, width: '100%' }} mt={3}></Box>
    </Box>
  );
};
