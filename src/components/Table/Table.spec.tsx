import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Table from './';

describe('Table', () => {
  test('should render table header with columns', () => {
    const columns = ['name', 'email'];

    render(<Table columns={columns} data={[]} onClick={() => undefined} />);

    const tableHeaderName = screen.getByText('name');
    const tableHeaderEmail = screen.getByText('email');

    waitFor(() => {
      expect(tableHeaderName).toBeInTheDocument();
      expect(tableHeaderEmail).toBeInTheDocument();
      expect(tableHeaderName).toHaveTextContent('name');
      expect(tableHeaderEmail).toHaveTextContent('email');
    });
  });

  test('should render table rows with data', () => {
    const columns = ['name', 'email'];
    const data = [
      { name: 'John Doe', email: 'johndoe@example.com' },
      { name: 'Jane Smith', email: 'janesmith@example.com' },
    ];

    render(<Table columns={columns} data={data} onClick={() => undefined} />);

    const tableRowsName = screen.getByText('John Doe');
    const tableRowsEmail = screen.getByText('janesmith@example.com');

    expect(tableRowsName).toBeInTheDocument();
    expect(tableRowsEmail).toBeInTheDocument();
  });
});
