import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  useTheme,
} from '@mui/material';
import { FC } from 'react';
import CloseIcon from '@mui/icons-material/Close';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: JSX.Element | JSX.Element[];
  fullscreen?: boolean;
}

export const CommonModal: FC<IProps> = ({
  title,
  isOpen,
  onClose,
  children,
  fullscreen,
}) => {
  const { palette } = useTheme();
  return (
    <Dialog
      fullScreen={fullscreen}
      open={isOpen}
      onClose={onClose}
      PaperProps={{
        borderRadius: '16px',
      }}
    >
      <Box>
        <Box
          display={'flex'}
          alignItems={'center'}
          py={'10px'}
          px={'15px'}
          borderBottom={`1px solid ${palette.grey[300]}`}
        >
          <Typography
            color={palette.grey[600]}
            fontSize={'16px'}
            fontWeight="bold"
          >
            {title}
          </Typography>
          <IconButton
            onClick={onClose}
            sx={{ marginLeft: 'auto', borderColor: palette.grey[600] }}
          >
            <CloseIcon sx={{ color: palette.grey[400] }} />
          </IconButton>
        </Box>

        <DialogContent>{children}</DialogContent>
      </Box>
    </Dialog>
  );
};
