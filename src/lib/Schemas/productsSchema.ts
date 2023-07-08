import { Schema, models, model } from 'mongoose';

type TImages = {
  imageMain: string;
  images: string[];
};

interface IProductsProps {
  name: string;
  price: number;
  promotionalPrice: number;
  description: string;
  images: TImages;
  characteristics: object[];
  category: string[];
  subCategory: string[];
  manufacturer: string;
  brand: string;
  sku: string;
  stockQuantity: number;
  unitDiscount: number;
  orderProduct: boolean;
}

interface IProductsSchemaProps extends IProductsProps {
  productsSimilar: IProductsProps[];
}

const imagesSchemas = new Schema<TImages>({
  imageMain: { type: String, required: true },
  images: { type: [String] },
});

const productsSchema = new Schema<IProductsSchemaProps>({
  name: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  promotionalPrice: { type: Number },
  description: { type: String, required: true },
  category: { type: [String], required: true },
  subCategory: { type: [String], required: true },
  manufacturer: { type: String },
  brand: { type: String },
  sku: { type: String },
  images: { type: imagesSchemas },
  characteristics: { type: [Object] },
  productsSimilar: { type: [Object] },
  stockQuantity: { type: Number, required: true },
  unitDiscount: { type: Number },
  orderProduct: { typpe: Boolean, default: false },
});

const Products = models.products || model('products', productsSchema);

export default Products;
