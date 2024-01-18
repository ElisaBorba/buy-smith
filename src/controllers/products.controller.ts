import { Request, Response } from 'express';
import productsService from '../services';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const addProduct = async (req: Request, res: Response): Promise<Response> => {
  // const id = Number(req.params.id);
  const { name, price, orderId } = req.body;
      
  const serviceResponse = await productsService.addProduct({ name, price, orderId });
  
  console.log('PRODUCT CONTROLLER', serviceResponse);

  return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
};

export default {
  addProduct,
};