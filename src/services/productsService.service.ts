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
  
  console.log('PRODUCT SERVICEEEE', newProduct);
  return { status: 'SUCCESS', data: newProduct.dataValues };
};

export default {
  addProduct,
};