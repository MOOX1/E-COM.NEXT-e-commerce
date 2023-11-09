import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Table from './';
import { ITableProps } from './types';

interface IData {
  name: string;
  email: string;
}

describe('Table', () => {
  test('should render table header with columns', () => {
    const columns: ITableProps<[]>['columns'] = [
      {
        index: 'name',
        label: 'Name',
      },
      {
        index: 'email',
        label: 'Email',
      },
    ];

    render(<Table columns={columns} data={[]} onClick={() => undefined} />);

    const tableHeaderName = screen.getByText('Name');
    const tableHeaderEmail = screen.getByText('Email');

    waitFor(() => {
      expect(tableHeaderName).toBeInTheDocument();
      expect(tableHeaderEmail).toBeInTheDocument();
      expect(tableHeaderName).toHaveTextContent('Name');
      expect(tableHeaderEmail).toHaveTextContent('Email');
    });
  });

  test('should render table rows with data', () => {
    const columns: ITableProps<IData>['columns'] = [
      {
        index: 'name',
        label: 'Name',
      },
      {
        index: 'email',
        label: 'Email',
      },
    ];
    const data: IData[] = [
      { name: 'John Doe', email: 'johndoe@example.com' },
      { name: 'Jane Smith', email: 'janesmith@example.com' },
    ];

    render(<Table<IData> columns={columns} data={data} onClick={() => undefined} />);

    const tableRowsName = screen.getByText('John Doe');
    const tableRowsEmail = screen.getByText('janesmith@example.com');

    expect(tableRowsName).toBeInTheDocument();
    expect(tableRowsEmail).toBeInTheDocument();
  });
});
