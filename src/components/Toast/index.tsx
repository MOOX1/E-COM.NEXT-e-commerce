'use client';

import { useCallback, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export type ToastType = 'success' | 'info' | 'error' | 'default';

interface ToastProps {
  type?: ToastType;
  message?: string;
  onClose?: () => void;
}

export default function Toast({
  message,
  type = 'default',
  onClose
}: ToastProps) {
  const showToast = useCallback(
    (message: string) => {
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
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [message, type]
  );

  useEffect(() => {
    if (!message) return;

    showToast(message);
  }, [message, showToast]);

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
