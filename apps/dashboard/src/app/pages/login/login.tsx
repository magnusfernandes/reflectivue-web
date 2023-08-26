import 'react-phone-number-input/style.css';

import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

import { loginFormSchema } from './login.schema';
import { InputPhone } from '@shared-ui';
import { NavLink } from 'react-router-dom';

interface LoginForm {
  password: string;
  phone: string;
}

export function LoginPage() {
  const theme = useTheme();
  const {
    handleSubmit,
    control,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: 'all',
    defaultValues: {
      phone: '',
      password: '',
    },
    resolver: yupResolver(loginFormSchema),
  });

  const onSubmit = (data: LoginForm) => {
    console.log(data);
  };

  return (
    <Container disableGutters sx={{ height: '100vh' }} maxWidth={false}>
      <Grid container height={'100%'}>
        <Grid
          item
          sx={{ backgroundColor: theme.palette.primary.main }}
          height={'100%'}
          sm={8}
        >
          test
        </Grid>
        <Grid
          item
          height={'100%'}
          sm={4}
          display={'flex'}
          justifyContent={'center'}
          p={5}
          pt={50}
        >
          <Box
            width={'400px'}
            display={'flex'}
            flexDirection={'column'}
            gap={'4rem'}
          >
            <Box>
              <Typography variant="h4">Hey, hello 👋</Typography>
              <Typography variant="body1" color={theme.palette.grey[500]}>
                Welcome back to reflectivue
              </Typography>
            </Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box display={'flex'} flexDirection={'column'} mb={4} gap={1}>
                <Box display={'flex'} flexDirection={'column'} gap={1}>
                  <Typography variant="body2">Phone number</Typography>
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field: { ref, onChange, ...field } }) => (
                      <InputPhone
                        {...field}
                        fullWidth
                        onChange={onChange}
                        defaultCountry={'IN'}
                        error={!!errors.phone}
                        helperText={errors.phone ? errors.phone.message : ' '}
                      />
                    )}
                  />
                </Box>
                <Box display={'flex'} flexDirection={'column'} gap={1}>
                  <Typography variant="body2">Password</Typography>
                  <Controller
                    name="password"
                    control={control}
                    render={({ field: { ref, onChange, ...field } }) => (
                      <TextField type="password" fullWidth />
                    )}
                  />
                </Box>
                <Box display={'flex'} justifyContent={'flex-end'}>
                  <NavLink to={'/reset'}>
                    <Typography
                      variant="body2"
                      color={theme.palette.primary.main}
                    >
                      Forgot password
                    </Typography>
                  </NavLink>
                </Box>
              </Box>
              <Button type="submit" variant="contained" fullWidth>
                Login
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
