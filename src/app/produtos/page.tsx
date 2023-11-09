import ProdutosComponent from '@/components/Produtos';
import { IProductsProps } from '@/lib/Schemas/productsSchema';
import { Fetch } from '@/services/fetch';

export const dynamic = 'force-dynamic';

export default async function Produtos() {
  let data: IProductsProps[] = [];
  try {
    const response: { products: IProductsProps[] } = await Fetch('/api/products', {
      next: {
        revalidate: 0,
      },
    });

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
