import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Div from './';
import React from 'react';
import { act } from 'react-dom/test-utils';

describe('<Div />', () => {
  test('should render div with correct className', () => {
    const className = 'custom-div';
    render(<Div className={className}>hello</Div>);

    const divElement = screen.getByText('hello');

    waitFor(() => {
      expect(divElement).toHaveClass(className);
    });
  });

  test('should call handleClick function when div is clicked', async () => {
    const handleClickMock = jest.fn();
    render(<Div handleClick={handleClickMock}>hello</Div>);

    const divElement = screen.getByText('hello');

    act(() => {
      userEvent.click(divElement);
    });

    await waitFor(() => {
      expect(handleClickMock).toHaveBeenCalledTimes(1);
    });
  });

  test('should render div with custom style', () => {
    const customStyle = { color: 'red', backgroundColor: 'blue' };
    render(<Div style={customStyle}>hello</Div>);

    const divElement = screen.getByText('hello');

    waitFor(() => {
      expect(divElement).toHaveStyle(customStyle);
    });
  });
});
