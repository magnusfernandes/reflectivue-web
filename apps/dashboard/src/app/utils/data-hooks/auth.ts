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

  const { data } = useQuery({
    queryKey: ['validate'],
    queryFn: async () => {
      const response = await makeRequest(
        '/auth/validate',
        RequestMethod.GET,
        true
      );

      const data = await response?.message?.user;
      if (!data) {
        invalidateUser();
      }
      return data;
    },
    retry: false,
    refetchOnWindowFocus: false,
  });
  return { data };
};
