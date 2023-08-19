import Select from '@/components/atoms/Select';
import { LayoutGrid, LayoutList } from 'lucide-react';
import { Control } from 'react-hook-form';

const optionShow = [
  {
    label: '10',
    value: '10',
  },
  {
    label: '50',
    value: '50',
  },
  {
    label: '100',
    value: '100',
  },
];

const optionOrderBy = [
  {
    label: 'DESC',
    value: 'DESC',
  },
  {
    label: 'ASC',
    value: 'ASC',
  },
];

type TFormValues = {
  Nome: string;
};

interface IFilterProps {
  control: Control<TFormValues>;
}

export default function Filter({ control }: IFilterProps) {
  return (
    <div className="flex w-auto items-center justify-center gap-2">
      {' '}
      <p className="font-sans text-mediaBlue">Mostrar :</p>
      <div className="w-16">
        <Select
          textCenter={true}
          SelectedLayout2={true}
          placeholder="10"
          options={optionShow}
          controlForm={{
            control: control,
            name: 'levelAccess' as 'Nome',
            defaultValue: '',
            rules: { required: true },
          }}
        />
      </div>
      <div className="w-24">
        <Select
          textCenter={true}
          SelectedLayout2={true}
          placeholder="Ordenar"
          options={optionOrderBy}
          controlForm={{
            control: control as unknown as Control<TFormValues>,
            name: 'levelAccess' as 'Nome',
            defaultValue: '',
            rules: { required: true },
          }}
        />
      </div>
      <div className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-strongBlue">
        <LayoutGrid className="text-mediaBlue opacity-80" />
      </div>
      <div className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-strongBlue">
        <LayoutList className="text-mediaBlue opacity-80" />
      </div>
    </div>
  );
}
