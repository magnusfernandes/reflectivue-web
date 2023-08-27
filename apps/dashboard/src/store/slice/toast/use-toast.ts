import { useDispatch } from 'react-redux';

import { setSnackBar } from './toast.slice';
import { NotificationType } from '@shared-helpers';

interface ToastProps {
  message: string;
  type?: NotificationType;
}

export const useToast = () => {
  const dispatch = useDispatch();

  const toast = ({ message, type }: ToastProps) => {
    dispatch(
      setSnackBar({
        type: type || NotificationType.success,
        message,
      })
    );
  };

  const showErrorToast = (message?: string) =>
    toast({
      message: message || 'Opps something went wrong!',
      type: NotificationType.error,
    });

  const showSuccessToast = (message?: string) =>
    toast({
      message: message || 'Successfully updated!',
      type: NotificationType.success,
    });

  return { toast, showErrorToast, showSuccessToast };
};
