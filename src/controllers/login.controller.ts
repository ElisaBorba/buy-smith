import { Request, Response } from 'express';
import services from '../services';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const { loginService } = services;

const login = async (req: Request, res: Response) => {
  const serviceResponse = await loginService.loginAccess(req.body);

  if (serviceResponse.status !== 'SUCCESS') {
    return res
      .status(mapStatusHTTP(serviceResponse.status))
      .json(serviceResponse.data);
  }
  res.status(200).json(serviceResponse.data);
};

export default {
  login,
};
