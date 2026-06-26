import { useEffect, useState } from 'react';

export interface UseModalProps {
  isOpen: boolean;
}

export const useModal = ({ isOpen }: UseModalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const shouldRender = isOpen && mounted;

  return {
    shouldRender
  };
};

export default useModal;
