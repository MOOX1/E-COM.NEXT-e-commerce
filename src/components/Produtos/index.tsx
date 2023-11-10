'use client';

import * as zod from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Control, useForm } from 'react-hook-form';
import Table from '@/components/Table';
import Header from './Header';

import Filter from './Filters';
import { ITableProps } from '../Table/types';
import { IProductsProps } from '@/lib/Schemas/productsSchema';
import ImageProducts from '../Table/ItemsTable/ImageProducts';
import Ativo from '../Table/ItemsTable/Ativo';
import { useMemo, useState } from 'react';
import Input from '../atoms/Input';
import { SearchIcon } from 'lucide-react';
import TableLoad from '../Loads/TableLoad';

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
}

const Columns: ITableProps<IProductsProps>['columns'] = [
  {
    index: 'imageMain',
    label: 'Image',
    width: '9',
    render: value => (
      <ImageProducts
        image={
          value.images.imageMain !== 'null' ? value.images.imageMain : undefined
        }
        index={value.sku}
      />
    ),
  },
  {
    index: 'name',
    label: 'Nome',
  },
  {
    index: 'sku',
    label: 'Sku',
  },
  {
    index: 'productActive',
    label: 'Ativo',
    render: value => <Ativo active={value.productActive} />,
  },
  {
    index: 'stockQuantity',
    label: 'Estoque',
  },
  {
    index: 'category',
    label: 'Categoria',
  },
  {
    index: 'price',
    label: 'Preço',
  },
];

export default function ProdutosComponent({ data }: IProductsComponentProps) {
  const [inputSearchValue, setInputSearchValue] = useState<string>();

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

  const handleChangeValueInputSearch = (newValue: string) => {
    return setInputSearchValue(newValue);
  };

  const valueFiltered = useMemo(() => {
    if (!inputSearchValue) return data;
    return data.filter(products => {
      return products.name.toLowerCase().includes(inputSearchValue?.toLowerCase());
    });
  }, [data, inputSearchValue]);

  return (
    <div className="flex h-full w-full flex-col ">
      <div className="flex flex-col gap-10">
        <Header />
        <div className="flex h-full flex-1 items-baseline justify-between pb-3">
          <div className="w-80">
            <Input
              type="text"
              styleOffButton="secund"
              ariaLabel="input-search"
              onChange={handleChangeValueInputSearch}
              icon={<SearchIcon className="text-mainBlue opacity-80" />}
            />
          </div>
          <Filter control={control as unknown as Control<TFormValues>} />
        </div>
      </div>
      <div className="flex h-full  w-full flex-[2] gap-4 overflow-auto rounded-md bg-strongBlue scrollbar-thin scrollbar-track-transparent scrollbar-thumb-mediaBlue/20 scrollbar-thumb-rounded  ">
        <Table<IProductsProps> columns={Columns} data={valueFiltered} />
      </div>
    </div>
  );
}
