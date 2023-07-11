'use client';

import { Plus, SearchIcon } from 'lucide-react';
import Input from '@/components/atoms/Input';
import Select from '@/components/atoms/Select';
import * as zod from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Control, useForm } from 'react-hook-form';
import { LayoutGrid, LayoutList } from 'lucide-react';
import Table from '@/components/Table';

type TFormValues = {
  Nome: string;
};

const schema = z.object({
  email: z.string().email('Informe um email válido'),
  levelAccess: z.string().min(1, 'Campo Obrigatório'),
});

const columns = ['imageProducts', 'Sku', 'Ativo', 'Estoque', 'Categoria', 'Preço'];

const data = [
  {
    imageProducts: '',
    Sku: '168496849',
    Ativo: 'Ativo',
    Estoque: 215,
    Categoria: 'Bicicleta',
    Preço: '$24,00',
  },
  {
    imageProducts: '',
    Sku: '168496849',
    Ativo: 'Ativo',
    Estoque: 215,
    Categoria: 'Bicicleta',
    Preço: '$24,00',
  },
  {
    imageProducts: '',
    Sku: '168496849',
    Ativo: 'Ativo',
    Estoque: 215,
    Categoria: 'Bicicleta',
    Preço: '$24,00',
  },
  {
    imageProducts: '',
    Sku: '168496849',
    Ativo: 'Ativo',
    Estoque: 215,
    Categoria: 'Bicicleta',
    Preço: '$24,00',
  },
  {
    imageProducts: '',
    Sku: '168496849',
    Ativo: 'Ativo',
    Estoque: 215,
    Categoria: 'Bicicleta',
    Preço: '$24,00',
  },
  {
    imageProducts: '',
    Sku: '168496849',
    Ativo: 'Ativo',
    Estoque: 215,
    Categoria: 'Bicicleta',
    Preço: '$24,00',
  },
  {
    imageProducts: '',
    Sku: '168496849',
    Ativo: 'Ativo',
    Estoque: 215,
    Categoria: 'Bicicleta',
    Preço: '$24,00',
  },
  {
    imageProducts: '',
    Sku: '168496849',
    Ativo: 'Ativo',
    Estoque: 215,
    Categoria: 'Bicicleta',
    Preço: '$24,00',
  },
  {
    imageProducts: '',
    Sku: '168496849',
    Ativo: 'Ativo',
    Estoque: 215,
    Categoria: 'Bicicleta',
    Preço: '$24,00',
  },
  {
    imageProducts: '',
    Sku: '168496849',
    Ativo: 'Ativo',
    Estoque: 215,
    Categoria: 'Bicicleta',
    Preço: '$24,00',
  },
  {
    imageProducts: '',
    Sku: '168496849',
    Ativo: 'Ativo',
    Estoque: 215,
    Categoria: 'Bicicleta',
    Preço: '$24,00',
  },
  {
    imageProducts: '',
    Sku: '168496849',
    Ativo: 'Ativo',
    Estoque: 215,
    Categoria: 'Bicicleta',
    Preço: '$24,00',
  },
];

type TFormDataProps = z.infer<typeof schema>;

export default function Produtos() {
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

  return (
    <div className="flex h-full w-full flex-col ">
      <div className="flex flex-col gap-10">
        <div className="flex flex-1 justify-between">
          <h1 className="font-alt text-xl text-mainBlue">Produtos (50)</h1>
          <div className="flex cursor-pointer items-center gap-1 rounded bg-strongBlue p-2">
            <Plus className="text-mediaBlue" />
            <p className="font-sans text-base text-mediaBlue"> Cadastrar </p>
          </div>
        </div>

        <div className="flex h-full flex-1 items-baseline justify-between pb-3">
          <div className="w-80">
            <Input
              type="text"
              styleOffButton="secund"
              ariaLabel="input-search"
              icon={<SearchIcon className="text-mainBlue opacity-80" />}
            />
          </div>

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
                  control: control as unknown as Control<TFormValues>,
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
        </div>
      </div>
      <div className="flex h-full w-full flex-[2] gap-4 overflow-auto rounded-md bg-strongBlue ">
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
}
