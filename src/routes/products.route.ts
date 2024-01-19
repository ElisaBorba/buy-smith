import { Router } from 'express';
import productsController from '../controllers';

const productsRoutes = Router();

productsRoutes.post('/', productsController.addProduct);
productsRoutes.get('/', productsController.getProducts);

export default productsRoutes;
