import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import LoginForm from '../loginForm';
import { userEvent, waitFor } from '@storybook/testing-library';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn().mockReturnValue({
    get: jest.fn().mockReturnValue('Seu erro mockado aqui'),
  }),
}));

export const loadAnimation = jest.fn();

jest.mock('lottie-web', () => ({
  __esModule: true,
  default: {
    loadAnimation: jest.fn(),
  },
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: jest
    .fn()
    .mockImplementation(({ src, alt }) => <img src={src} alt={alt} />),
}));

describe('<LoginForm />', () => {
  it('should render default correctly', () => {
    render(<LoginForm />);

    const inputEmail = screen.getByLabelText(/E-mail/i);
    const buttonSubmit = screen.getByLabelText(/button-submit/i);
    const buttonGoogle = screen.getByLabelText(/buttom-google/i);

    waitFor(() => {
      expect(inputEmail).toBeInTheDocument();
      expect(buttonSubmit).toBeInTheDocument();
      expect(buttonGoogle).toBeInTheDocument();
    });
  }),
    it('submit with data not corrected', async () => {
      render(<LoginForm />);
      const buttonSubmit = screen.getByLabelText(/button-submit/i);

      act(() => {
        userEvent.click(buttonSubmit);
      });

      await waitFor(() => {
        expect(screen.getByText('Informe um email válido')).toBeVisible();
      });
    });

  it('submit with data corrected', async () => {
    render(<LoginForm />);
    const message = screen.queryByText('Informe um email válido');
    const inputEmail = screen.getByLabelText(/E-mail/i);

    act(() => {
      userEvent.type(inputEmail, 'vitormeneses87@gmail.com');
    });

    await waitFor(() => {
      expect(message).not.toBeInTheDocument();
    });
  });
});
