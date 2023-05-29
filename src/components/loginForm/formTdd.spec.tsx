import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import LoginForm from './LoginForm';
import { userEvent, waitFor } from '@storybook/testing-library';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn()
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
    const buttonSubmite = screen.getByLabelText(/buttom-submit/i);
    const buttomGoogle = screen.getByLabelText(/buttom-google/i);

    expect(inputeEmail).toBeInTheDocument();
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
      });
    });

  it('submit with data corrected', async () => {
    render(<LoginForm />);
    const inputeEmail = screen.getByLabelText(/E-mail/i);

    act(() => {
      userEvent.type(inputeEmail, 'vitormeneses87@gmail.com');
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
