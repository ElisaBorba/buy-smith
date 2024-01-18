import { Router } from 'express';
import productsController from '../controllers';

const productsRoutes = Router();

productsRoutes.post('/', productsController.addProduct);

export default productsRoutes;
