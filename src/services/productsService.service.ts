import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

const addProduct = async ({ name, price, orderId }: ProductInputtableTypes)
: Promise<ServiceResponse<Product>> => {
  const newProduct = await ProductModel.create({
    name,
    price,
    orderId,
  });
  
  console.log('RETURN DE DATA', newProduct.dataValues);
  return { status: 'CREATED', data: newProduct.dataValues };
};

export default {
  addProduct,
};