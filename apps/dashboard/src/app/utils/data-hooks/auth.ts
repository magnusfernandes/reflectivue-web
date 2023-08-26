import { useMutation } from '@tanstack/react-query';
import makeRequest from './requests';
import { LoginForm } from '../interface';
import { RouterPath } from '../../pages/routes-path';
import { LocalStorage } from '../enum';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (formData: LoginForm) => {
      return makeRequest('/auth/login', 'POST', true, formData).then((res) => {
        console.log(res);
        localStorage.setItem(LocalStorage.token, res.message.token);
        navigate(RouterPath.home);
      });
    },
  });
};
