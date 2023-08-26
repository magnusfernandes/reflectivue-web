import { useMutation, useQuery } from '@tanstack/react-query';
import makeRequest from './requests';
import { LoginForm } from '../interface';

// export const useLogin = (payload: LoginForm) => {
//   const { data, error, isLoading } = useQuery({
//     queryKey: ['login'],
//     queryFn: async () => {
//       const response = await makeRequest('/auth/login', 'POST', true);
//       const data = await response.data;
//       return data;
//     },
//     retry: false,
//     refetchOnWindowFocus: false,
//   });
//   return { data, error, isLoading };
// };

export const useLogin = () => {
  return useMutation({
    mutationFn: (payload: LoginForm) => {
      return makeRequest('/auth/login', 'POST', true, payload);
    },
  });
};
