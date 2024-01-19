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
  
  return { status: 'CREATED', data: newProduct.dataValues };
};

const getProducts = async ()
: Promise<ServiceResponse<Product[]>> => {
  const products = await ProductModel.findAll();
  const productsData = products.map((product) => product.dataValues);
  console.log('LISTAAAAAAAA', productsData);
  
  return { status: 'SUCCESS', data: productsData };
};

export default {
  addProduct,
  getProducts,
};