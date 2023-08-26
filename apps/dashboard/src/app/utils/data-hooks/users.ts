import axios from 'axios';
import { UserForm } from '../interface';
import { useQuery } from '@tanstack/react-query';
import makeRequest from './requests';

export const useGetAllUsers = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['allUsers'],
    queryFn: async () => {
      const response = await makeRequest('/users/list', 'GET', true);
      const data = await response.data;
      return data;
    },
    retry: false,
    refetchOnWindowFocus: false,
  });
  return { data, error, isLoading };
};

export const useGetUser = (id: string) => {
  return axios.get(`/users/${id}`);
};

export const useCreateNewUser = (userFormData: UserForm) => {
  return axios.post('/users', userFormData);
};

export const updateUser = (userFormData: UserForm) => {
  return axios.patch(`/users/${userFormData.id}`, userFormData);
};

export const deleteUser = (id: string) => {
  return axios.delete(`/users/${id}`);
};
