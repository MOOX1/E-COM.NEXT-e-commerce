import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import LoginForm from './LoginForm';
import { userEvent, waitFor } from '@storybook/testing-library';

jest.mock('next/navigation', () => ({
  __esModule: true,
  useSearchParams: jest.fn(() => ({ get: jest.fn() }))
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: jest
    .fn()
    .mockImplementation(({ src, alt }) => <img src={src} alt={alt} />)
}));

describe('<LoginForm />', () => {
  it('should render default correctly', () => {
    render(<LoginForm />);

    const inputeEmail = screen.getByLabelText(/E-mail/i);
    const inputPassword = screen.getByLabelText(/Password/i);
    const buttonSubmite = screen.getByLabelText(/buttom-submit/i);
    const buttomGoogle = screen.getByLabelText(/buttom-google/i);

    expect(inputeEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(buttonSubmite).toBeInTheDocument();
    expect(buttomGoogle).toBeInTheDocument();
  }),
    it('submit with data not corrected', async () => {
      render(<LoginForm />);
      const buttonSubmite = screen.getByLabelText(/buttom-submit/i);

      act(() => {
        userEvent.click(buttonSubmite);
      });

      await waitFor(() => {
        expect(screen.getByText('Informe um email válido')).toBeVisible();
        expect(screen.getByText('Informe uma senha válida')).toBeVisible();
      });
    });

  it('submit with data corrected', async () => {
    render(<LoginForm />);
    const inputeEmail = screen.getByLabelText(/E-mail/i);
    const inputPassword = screen.getByLabelText(/Password/i);

    act(() => {
      userEvent.type(inputeEmail, 'vitormeneses87@gmail.com');
      userEvent.type(inputPassword, '123456');
    });

    await waitFor(() => {
      expect(
        screen.queryByText('Informe um email válido')
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText('Informe uma senha válida')
      ).not.toBeInTheDocument();
    });
  });
});
