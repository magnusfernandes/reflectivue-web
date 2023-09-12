import { useState } from 'react';

export const useModalState = ({ initialOpen = false } = {}) => {
  const [isOpen, setIsOpen] = useState(initialOpen);

  const onOpen = (): void => {
    setIsOpen(true);
  };

  const onClose = (): void => {
    setIsOpen(false);
  };

  const onToggle = (): void => {
    setIsOpen(!isOpen);
  };

  return { onOpen, onClose, isOpen, onToggle };
};
