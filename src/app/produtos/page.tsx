import ProdutosComponent from '@/components/Produtos';
export interface IProductsProps {
  imageProducts: string;
  Sku: string;
  Ativo: boolean;
  Estoque: number;
  Categoria: string;
  Preço: string;
}
const data: IProductsProps[] = [
  {
    imageProducts: '',
    Sku: '16849',
    Ativo: true,
    Estoque: 215,
    Categoria: 'Calulares',
    Preço: '$1.900,00',
  },
  {
    imageProducts: '',
    Sku: '168496849',
    Ativo: true,
    Estoque: 25,
    Categoria: 'Bicicleta',
    Preço: '$240,00',
  },
  {
    imageProducts: '',
    Sku: '168496',
    Ativo: true,
    Estoque: 38,
    Categoria: 'Blusas',
    Preço: '$2.400,00',
  },
  {
    imageProducts: '',
    Sku: '6849',
    Ativo: false,
    Estoque: 215,
    Categoria: 'Talheres',
    Preço: '$280,00',
  },
  {
    imageProducts: '',
    Sku: '9875',
    Ativo: false,
    Estoque: 89,
    Categoria: 'Bicicleta',
    Preço: '$190,00',
  },
  {
    imageProducts: '',
    Sku: '1949',
    Ativo: true,
    Estoque: 215,
    Categoria: 'Bicicleta',
    Preço: '$24,00',
  },
  {
    imageProducts: '',
    Sku: '168496849',
    Ativo: false,
    Estoque: 215,
    Categoria: 'Bicicleta',
    Preço: '$24,00',
  },
  {
    imageProducts: '',
    Sku: '168496849',
    Ativo: false,
    Estoque: 215,
    Categoria: 'Bicicleta',
    Preço: '$24,00',
  },
  {
    imageProducts: '',
    Sku: '168496849',
    Ativo: false,
    Estoque: 215,
    Categoria: 'Bicicleta',
    Preço: '$24,00',
  },
  {
    imageProducts: '',
    Sku: '168496849',
    Ativo: false,
    Estoque: 215,
    Categoria: 'Bicicleta',
    Preço: '$24,00',
  },
];
const columns = ['imageProducts', 'Sku', 'Ativo', 'Estoque', 'Categoria', 'Preço'];

export default function Produtos() {
  return (
    <>
      <ProdutosComponent columns={columns} data={data} />
    </>
  );
}
