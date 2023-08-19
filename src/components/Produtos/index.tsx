'use client';

import Select from '@/components/atoms/Select';
import * as zod from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Control, useForm } from 'react-hook-form';
import { LayoutGrid, LayoutList } from 'lucide-react';
import Table from '@/components/Table';
import Header from './Header';
import { IProductsProps } from '@/app/produtos/page';
import InputSearch from './InputSearch';
import Filter from './Filters';

type TFormValues = {
  Nome: string;
};

const schema = z.object({
  email: z.string().email('Informe um email válido'),
  levelAccess: z.string().min(1, 'Campo Obrigatório'),
});

type TFormDataProps = z.infer<typeof schema>;

interface IProductsComponentProps {
  data: IProductsProps[];
  columns: string[];
}

export default function ProdutosComponent({
  columns,
  data,
}: IProductsComponentProps) {
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
    reset,
  } = useForm<TFormDataProps>({
    mode: 'onSubmit',
    criteriaMode: 'firstError',
    resolver: zod.zodResolver(schema),
    defaultValues: {
      email: '',
      levelAccess: '',
    },
  });

  return (
    <div className="flex h-full w-full flex-col ">
      <div className="flex flex-col gap-10">
        <Header />
        <div className="flex h-full flex-1 items-baseline justify-between pb-3">
          <InputSearch />
          <Filter control={control as unknown as Control<TFormValues>} />
        </div>
      </div>
      <div className="flex h-full  w-full flex-[2] gap-4 overflow-auto rounded-md bg-strongBlue scrollbar-thin scrollbar-track-transparent scrollbar-thumb-mediaBlue/20 scrollbar-thumb-rounded  ">
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
}
