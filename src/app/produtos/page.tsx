import ProdutosComponent from '@/components/Produtos';
import { IProductsProps } from '@/lib/Schemas/productsSchema';
import { Fetch } from '@/services/fetch';
import { headers as Headers } from 'next/headers';

export const dynamic = 'force-dynamic';

export default async function Produtos() {
  let data: IProductsProps[] = [];
  try {
    const responseJson = await Fetch('/api/products', {
      next: {
        revalidate: 0,
      },
      headers: {
        cookies: Headers().get('cookie') ?? '',
      },
    });
    const response: { products: IProductsProps[] } = await responseJson.json();

    data = response.products;
  } catch (error) {
    console.log(error);
  }

  return (
    <>
      <ProdutosComponent data={data} />
    </>
  );
}
