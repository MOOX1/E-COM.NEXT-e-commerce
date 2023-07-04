import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './';
import React from 'react';
import { act } from 'react-dom/test-utils';

describe('<Button />', () => {
  test('should render button with correct label', () => {
    const label = 'Click me';
    render(<Button label={label} />);

    const buttonElement = screen.getByRole('button');

    waitFor(() => {
      expect(buttonElement).toBeInTheDocument();
    });
  });

  test('should call onClick function when button is clicked', async () => {
    const onClickMock = jest.fn();
    const label = 'Click me';
    render(<Button label={label} onClick={onClickMock} />);

    const buttonElement = screen.getByRole('button');

    act(() => {
      userEvent.click(buttonElement);
    });

    await waitFor(() => {
      expect(onClickMock).toHaveBeenCalledTimes(1);
    });
  });

  test('should render button with custom class name', () => {
    const label = 'Click me';
    const className = 'custom-button';
    render(<Button label={label} className={className} />);

    const buttonElement = screen.getByRole('button');

    waitFor(() => {
      expect(buttonElement).toHaveClass(className);
    });
  });

  test('should render button with custom type', () => {
    const label = 'Click me';
    const type = 'submit';
    render(<Button label={label} type={type} />);

    const buttonElement = screen.getByRole('button', { name: label });

    waitFor(() => {
      expect(buttonElement).toHaveAttribute('type', type);
    });
  });
});
