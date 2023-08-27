import axios from 'axios';
import { UserForm } from '../interface';
import { useMutation, useQuery } from '@tanstack/react-query';
import makeRequest from './requests';
import { useNavigate } from 'react-router-dom';
import { RequestMethod } from '../enum';
import { RouterPath } from '../../pages/routes-path';

export const useGetAllUsers = (searchValue?: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['allUsers'],
    queryFn: async () => {
      const response = await makeRequest(
        `/users/list?q=${searchValue ? searchValue : ''}`,
        RequestMethod.POST,
        true
      );
      const data = await response.message.users;
      return data;
    },
    retry: false,
    refetchOnWindowFocus: false,
  });
  return { data, error, isLoading };
};

export const useCreateNewUser = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (formData: UserForm) => {
      return makeRequest('/users', RequestMethod.POST, true, formData).then(
        (res) => {
          navigate(RouterPath.users);
        }
      );
    },
  });
};

export const useGetUser = (id: string) => {
  return axios.get(`/users/${id}`);
};

export const updateUser = (userFormData: UserForm) => {
  return axios.patch(`/users/${userFormData.id}`, userFormData);
};

export const deleteUser = (id: string) => {
  return axios.delete(`/users/${id}`);
};
