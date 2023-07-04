import React from 'react';
import { toast as toastMock } from 'react-toastify';
import { Toast, TToastType } from './';

jest.mock('react-toastify', () => {
  return {
    toast: jest.fn(),
    ToastContainer: jest.fn(({ toastStyle }) => (
      <div data-testid="toast-container" style={toastStyle} />
    )),
  };
});

jest.mock('react-toastify', () => ({
  toast: jest.fn(),
}));

describe('Toast', () => {
  test('should call toast with the correct parameters', () => {
    const message = 'Sample message';
    const onClose = jest.fn();
    const type: TToastType = 'success';

    Toast({ message, onClose, type });

    expect(toastMock).toHaveBeenCalledWith(message, {
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      type: type,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
      onClose: onClose,
    });
  });
});
