import { Request, Response } from 'express';
import services from '../services';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const { ordersService } = services;

const getOrders = async (_req: Request, res: Response): Promise<Response> => {
  const serviceResponse = await ordersService.getOrders();
  
  return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
};

export default {
  getOrders,
};
