import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './';
import React from 'react';
import { act } from 'react-dom/test-utils';

describe('<Input />', () => {
  test('should render input element with specified type', () => {
    render(<Input type="text" />);
    const inputElement = screen.getByRole('textbox');
    waitFor(() => {
      expect(inputElement).toBeInTheDocument();
    });
  });

  test('should render input element with specified placeholder', () => {
    render(<Input type="text" placeholder="Enter your name" />);
    const inputElement = screen.getByPlaceholderText('Enter your name');
    waitFor(() => {
      expect(inputElement).toBeInTheDocument();
    });
  });

  test('should render input element with specified aria-label', () => {
    render(<Input type="text" ariaLabel="Email" />);
    const inputElement = screen.getByLabelText('Email');
    waitFor(() => {
      expect(inputElement).toBeInTheDocument();
    });
  });

  test('should render input component and handle onChange event', async () => {
    const handleChange = jest.fn();

    render(
      <Input
        type="text"
        ariaLabel="Username"
        placeholder="Enter your username"
        onChange={value => handleChange(value)}
      />,
    );

    const inputElement: HTMLInputElement = screen.getByLabelText('Username');

    act(() => {
      userEvent.type(inputElement, 'john.doe');
    });

    waitFor(() => {
      expect(handleChange).toHaveBeenCalledWith('john.doe');
      expect(inputElement.value).toBe('john.doe');
    });
  });

  test('should render input component with error message', () => {
    const errorMessage = 'This field is required';

    render(
      <Input
        type="text"
        ariaLabel="Username"
        placeholder="Enter your username"
        errors={errorMessage}
      />,
    );

    waitFor(() => {
      const errorElement = screen.getByText(errorMessage);
      expect(errorElement).toBeInTheDocument();
    });
  });
});
