'use client';

import React from 'react';
import { X } from 'lucide-react';
import { useModal } from './useModal';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  const { shouldRender } = useModal({ isOpen });

  if (!shouldRender) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-bg-card border border-border-main rounded-2xl w-full max-w-md overflow-hidden shadow-xl animate-fade-in max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-border-main">
          <h3 className="text-base font-bold text-txt-main">{title}</h3>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-full hover:bg-bg-alt text-txt-muted hover:text-txt-main transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6 overflow-y-auto flex-grow">{children}</div>
      </div>
    </div>
  );
};
export default Modal;
