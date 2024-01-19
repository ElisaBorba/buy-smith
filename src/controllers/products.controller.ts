import { Request, Response } from 'express';
import productsService from '../services';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const addProduct = async (req: Request, res: Response): Promise<Response> => {
  const id = Number(req.params.id);
  const { name, price, orderId } = req.body;
      
  const serviceResponse = await productsService.addProduct({ id, name, price, orderId });

  return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
};

const getProducts = async (_req: Request, res: Response): Promise<Response> => {
  const serviceResponse = await productsService.getProducts();
  
  return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
};

export default {
  addProduct,
  getProducts,
};