import { useMutation, useQuery } from '@tanstack/react-query';
import makeRequest from './requests';
import { LoginForm } from '../interface';
import { RouterPath } from '../../pages/routes-path';
import { LocalStorage, RequestMethod } from '../enum';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (formData: LoginForm) => {
      return makeRequest(
        '/auth/login',
        RequestMethod.POST,
        true,
        formData
      ).then((res) => {
        localStorage.setItem(LocalStorage.token, res.message.token);
        navigate(RouterPath.home);
      });
    },
  });
};

export const useValidate = () => {
  const navigate = useNavigate();
  const invalidateUser = () => {
    navigate(RouterPath.login);
    localStorage.removeItem(LocalStorage.token);
  };

  useQuery({
    queryKey: ['validate'],
    queryFn: async () => {
      makeRequest('/auth/validate', RequestMethod.GET, true)
        .then((res) => {
          if (!res.message.user) {
            invalidateUser();
          }
        })
        .catch(() => invalidateUser());
    },
    retry: false,
    refetchOnWindowFocus: false,
  });
};
