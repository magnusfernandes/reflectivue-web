import { DeviceForm } from '../interface';
import { useMutation, useQuery } from '@tanstack/react-query';
import makeRequest from './requests';
import { useNavigate } from 'react-router-dom';
import { RequestMethod } from '../enum';
import { RouterPath } from '../../pages/routes-path';
import { useToast } from '../../../store/slice/toast/use-toast';

export const useGetAllDevices = () => {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['allDevices'],
    queryFn: async () => {
      const response = await makeRequest(
        `/devices/list`,
        RequestMethod.POST,
        true
      );
      const data = await response.message.devices;
      return data;
    },
    retry: false,
    refetchOnWindowFocus: false,
  });
  return { data, error, isLoading, refetch };
};

export const useCreateNewDevice = () => {
  const navigate = useNavigate();
  const { showSuccessToast, showErrorToast } = useToast();

  return useMutation({
    mutationFn: (formData: DeviceForm) => {
      return makeRequest('/devices', RequestMethod.POST, true, formData)
        .then((res) => {
          showSuccessToast('Successfully added a device');
          navigate(RouterPath.devices);
        })
        .catch((error) => showErrorToast(error));
    },
  });
};

export const useGetDevice = (id: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['allDevices'],
    queryFn: async () => {
      const response = await makeRequest(
        `/devices/${id}`,
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

export const useUpdateDevice = () => {
  const { showSuccessToast, showErrorToast } = useToast();

  return useMutation({
    mutationFn: (payload: { formData: DeviceForm; id: string }) => {
      return makeRequest(
        `/devices/${payload.id}`,
        RequestMethod.PATCH,
        true,
        payload.formData
      )
        .then((res) => {
          showSuccessToast('Successfully updated the device');
        })
        .catch((error) => showErrorToast(error));
    },
  });
};

export const useDeleteDevice = () => {
  const { showSuccessToast, showErrorToast } = useToast();

  return useMutation({
    mutationFn: (id: string) => {
      return makeRequest(`/devices/${id}`, RequestMethod.DELETE, true)
        .then((res) => {
          showSuccessToast('Successfully deleted the device');
        })
        .catch((error) => showErrorToast(error));
    },
  });
};
