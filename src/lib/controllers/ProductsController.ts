import { IResponseDefault } from '@/types/admins';
import Products, { IProductsProps } from '../Schemas/productsSchema';
import database from '../database/mongodb';

database.connect();

export const CreateProduct = async () => {
  const product = await Products.create({
    name: 'shoes',
    brand: 'Nike',
    category: 'shoes',
    characteristics: {
      size: 'G',
    },
    description: 'new shoes',
    price: 200,
    promotionalPrice: 150,
    images: {
      imageMain: null,
      images: [''],
    },
    manufacturer: 'nike',
    orderProduct: true,
    productActive: true,
    sku: '01222',
    stockQuantity: 10,
    subCategory: '',
    unitDiscount: 10,
  });
  const newProduct = await product.save();

  return newProduct;
};

export const FindAllProducts = async (): Promise<
  IProductsProps[] | null | IResponseDefault
> => {
  const products: IProductsProps[] = await Products.find().lean();

  if (!products) {
    return {
      status: 404,
      message: 'Produtos não encontrados',
    };
  }

  return products;
};
