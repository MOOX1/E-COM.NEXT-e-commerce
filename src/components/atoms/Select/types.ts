import { UseControllerProps } from 'react-hook-form';

export type TFormValues = {
  Nome: string;
};

export interface IOption {
  value: string | number;
  label: string;
}
export interface ICustomSelectProps {
  controlForm?: UseControllerProps<TFormValues>;
  error?: string;
  options?: IOption[];
  placeholder?: string;
  SelectedLayout2?: boolean;
  textCenter?: boolean;
}
