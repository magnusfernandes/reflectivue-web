import { UserForm } from '../interface';
import { useMutation, useQuery } from '@tanstack/react-query';
import makeRequest from './requests';
import { useNavigate } from 'react-router-dom';
import { RequestMethod } from '../enum';
import { RouterPath } from '../../pages/routes-path';
import { useToast } from '@dashboard-store';

export const useGetAllUsers = (searchValue?: string) => {
  const { data, error, isLoading, refetch } = useQuery({
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
  return { data, error, isLoading, refetch };
};

export const useCreateNewUser = () => {
  const navigate = useNavigate();
  const { showSuccessToast, showErrorToast } = useToast();

  return useMutation({
    mutationFn: (formData: UserForm) => {
      return makeRequest('/users', RequestMethod.POST, true, formData)
        .then((res) => {
          showSuccessToast('Successfully added a user');
          navigate(RouterPath.users);
        })
        .catch((error) => showErrorToast(error));
    },
  });
};

export const useGetUser = (id: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['allUsers'],
    queryFn: async () => {
      const response = await makeRequest(
        `/users/${id}`,
        RequestMethod.GET,
        true
      );
      const data = await response.message.user;
      return data;
    },
    retry: false,
    refetchOnWindowFocus: false,
  });
  return { data, error, isLoading };
};

export const useUpdateUser = () => {
  const { showSuccessToast, showErrorToast } = useToast();

  return useMutation({
    mutationFn: (payload: { formData: UserForm; id: string }) => {
      return makeRequest(
        `/users/${payload.id}`,
        RequestMethod.PATCH,
        true,
        payload.formData
      )
        .then((res) => {
          showSuccessToast('Successfully updated the user');
        })
        .catch((error) => showErrorToast(error));
    },
  });
};

export const useDeleteUser = () => {
  const { showSuccessToast, showErrorToast } = useToast();

  return useMutation({
    mutationFn: (id: string) => {
      return makeRequest(`/users/${id}`, RequestMethod.DELETE, true)
        .then((res) => {
          showSuccessToast('Successfully deleted the user');
        })
        .catch((error) => showErrorToast(error));
    },
  });
};
