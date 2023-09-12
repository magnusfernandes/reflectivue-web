import React, { useMemo } from 'react';
import { Box, Snackbar, Typography, useTheme } from '@mui/material';
import { NotificationType } from '@shared-helpers';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export interface ToastProps {
  type: NotificationType;
  message: string;
  isOpen?: boolean;
  onClose?: () => void;
  autoHideDuration?: number;
}

export const Toast = ({
  type,
  message,
  isOpen,
  onClose,
  autoHideDuration = 3000,
}: ToastProps) => {
  const theme = useTheme();

  const toastIcon = () => {
    console.log(type);
    if (type === NotificationType.error) {
      return <ErrorOutlineOutlinedIcon sx={{ color: '#fff' }} />;
    }
    if (type === NotificationType.info) {
      return <InfoOutlinedIcon sx={{ color: '#fff' }} />;
    }
    if (type === NotificationType.warning) {
      return <WarningAmberOutlinedIcon sx={{ color: '#fff' }} />;
    }
    return <CheckCircleOutlineOutlinedIcon sx={{ color: '#fff' }} />;
  };

  const toastColor = () => {
    if (type === NotificationType.error) {
      return theme.palette.error.main;
    }
    if (type === NotificationType.info) {
      return theme.palette.info.main;
    }
    if (type === NotificationType.warning) {
      return theme.palette.warning.main;
    }
    return theme.palette.success.main;
  };

  return (
    <Snackbar
      open={isOpen}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        p={1}
        borderRadius={'4px'}
        sx={{
          backgroundColor: toastColor(),
        }}
      >
        <Box display="flex" alignItems="center" gap={1}>
          <Box display="flex" alignItems="center" flexShrink={1}>
            {toastIcon()}
          </Box>
          <Typography variant="subtitle1" color="white" fontSize={'12px'}>
            {message}
          </Typography>
        </Box>
      </Box>
    </Snackbar>
  );
};
