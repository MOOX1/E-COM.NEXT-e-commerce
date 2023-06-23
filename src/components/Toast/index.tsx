'use client';

import { ToastContainer, toast } from 'react-toastify';

export type TToastType = 'success' | 'info' | 'error' | 'default';

interface IToastProps {
  type?: TToastType;
  message?: string;
  onClose?: () => void;
}

export const Toast = ({ message, onClose, type }: IToastProps) => {
  toast(message, {
    autoClose: false,
    hideProgressBar: false,
    closeOnClick: true,
    type: type,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
    onClose: onClose
  });
};

export function ContainerToast() {
  return (
    <ToastContainer
      toastStyle={{
        background: '#010217',
        border: 'solid 1px #6E8EDB',
        color: 'white'
      }}
    />
  );
}
