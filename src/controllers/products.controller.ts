import { Request, Response } from 'express';
import productsService from '../services';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const addProduct = async (req: Request, res: Response): Promise<Response> => {
  const id = Number(req.params.id);
  const { name, price, orderId } = req.body;
      
  const serviceResponse = await productsService.addProduct({ id, name, price, orderId });

  if (serviceResponse.status !== 'SUCCESS') {
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }
  
  return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
};

export default {
  addProduct,
};