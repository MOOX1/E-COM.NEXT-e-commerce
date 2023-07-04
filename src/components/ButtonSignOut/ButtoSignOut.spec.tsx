import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import ButtonSignOut from './';
import { act } from 'react-dom/test-utils';

jest.mock('next-auth/react', () => ({
  signOut: jest.fn().mockResolvedValue(undefined),
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockReturnValue({
    replace: jest.fn(),
    refresh: jest.fn(),
  }),
}));

describe('ButtonSignOut', () => {
  test('should call signOut and update router', async () => {
    render(<ButtonSignOut />);

    const logoutButton = screen.getByLabelText('logout-icon');

    act(() => {
      fireEvent.click(logoutButton);
    });

    await waitFor(() => {
      expect(signOut).toHaveBeenCalledTimes(1);
      expect(useRouter().replace).toHaveBeenCalledWith('/signin');
      expect(useRouter().refresh).toHaveBeenCalledTimes(1);
    });
  });
});
