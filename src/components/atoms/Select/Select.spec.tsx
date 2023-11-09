import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CustomSelect from './';
import { UseControllerProps } from 'react-hook-form';
import { userEvent } from '@storybook/testing-library';
import { act } from 'react-dom/test-utils';
import { ICustomSelectProps, TFormValues } from './types';

jest.mock('react-hook-form', () => {
  const originalModule = jest.requireActual('react-hook-form');

  type RefCallback<T> = (instance: T | null) => void;

  type UseControllerReturn<
    TFieldValues extends TFormValues,
    TName extends keyof TFormValues,
  > = {
    field: {
      onChange: (value: TFormValues[TName]) => void;
      onBlur: () => void;
      value: TFormValues[TName];
      name: TName;
      ref: RefCallback<HTMLInputElement>;
    };
  };

  type UseController<
    TFieldValues extends TFormValues,
    TName extends keyof TFormValues,
  > = (
    props: UseControllerProps<TFieldValues>,
  ) => UseControllerReturn<TFieldValues, TName>;

  const useController: UseControllerProps = jest.fn().mockImplementation(() => {
    const field: UseControllerReturn<TFormValues, 'Nome'>['field'] = {
      onChange: jest.fn(),
      onBlur: jest.fn(),
      value: '',
      name: 'Nome',
      ref: jest.fn(),
    };

    return { field };
  });

  return {
    ...originalModule,
    useController,
  };
});

jest.mock('lucide-react', () => ({
  ChevronDown: jest.fn().mockReturnValue(<svg data-testid="chevron-down-icon" />),
  ChevronUp: jest.fn().mockReturnValue(<svg data-testid="chevron-up-icon" />),
}));

describe('CustomSelect', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the default state with chevron down icon', () => {
    const controlForm: UseControllerProps<TFormValues, 'Nome'> = {
      name: 'Nome',
      control: {} as any,
      defaultValue: '',
    };
    const props: ICustomSelectProps = {
      controlForm,
      error: 'Sample error',
      placeholder: 'Nivel de acesso',
    };
    render(<CustomSelect {...props} />);

    expect(screen.getByTestId('chevron-down-icon')).toBeInTheDocument();
    expect(screen.queryByTestId('chevron-up-icon')).not.toBeInTheDocument();
    expect(screen.getByText('Nivel de acesso')).toBeInTheDocument();
  });

  it('renders the options when clicked and toggles the icon', async () => {
    const controlForm: UseControllerProps<TFormValues, 'Nome'> = {
      name: 'Nome',
      control: {} as any,
      defaultValue: '',
    };
    const props: ICustomSelectProps = {
      controlForm,
      error: 'Sample error',
      placeholder: 'Nivel de acesso',
      options: [
        { value: 'admin super', label: 'Admin Super' },
        { value: 'admin viewer', label: 'Admin Viewer' },
        { value: 'admin simple', label: 'Admin Simple' },
      ],
    };

    render(<CustomSelect {...props} />);

    const selectElement = screen.getByText('Nivel de acesso');

    act(() => {
      userEvent.click(selectElement);
    });

    waitFor(() => {
      expect(screen.queryByTestId('chevron-down-icon')).not.toBeInTheDocument();
      expect(screen.getByTestId('chevron-up-icon')).toBeInTheDocument();
      expect(screen.getByText('Admin Super')).toBeInTheDocument();
      expect(screen.getByText('Admin Viewer')).toBeInTheDocument();
      expect(screen.getByText('Admin Simple')).toBeInTheDocument();
    });
  });

  it('selects an option and updates the value', async () => {
    const controlForm: UseControllerProps<TFormValues, 'Nome'> = {
      name: 'Nome',
      control: {} as any,
      defaultValue: '',
    };
    const props: ICustomSelectProps = {
      controlForm,
      error: 'Sample error',
      placeholder: 'Nivel de acesso',
      options: [
        { value: 'admin super', label: 'Admin Super' },
        { value: 'admin viewer', label: 'Admin Viewer' },
        { value: 'admin simple', label: 'Admin Simple' },
      ],
    };

    render(<CustomSelect {...props} />);

    const selectElement = screen.getByText('Nivel de acesso');
    const optionElement = screen.getByText('Admin Viewer');

    act(() => {
      userEvent.click(selectElement);
      userEvent.click(optionElement);
    });

    waitFor(() => {
      expect(screen.getByText('Admin Viewer')).toBeInTheDocument();
    });
  });

  it('renders an error message', () => {
    const controlForm: UseControllerProps<TFormValues, 'Nome'> = {
      name: 'Nome',
      control: {} as any,
      defaultValue: '',
    };
    const props: ICustomSelectProps = {
      controlForm,
      error: 'Sample error',
    };

    render(<CustomSelect {...props} />);

    expect(screen.getByText('Sample error')).toBeInTheDocument();
  });
});
