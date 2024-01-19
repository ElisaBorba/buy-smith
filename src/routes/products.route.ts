import { Router } from 'express';
import controllers from '../controllers';
import middlewares from '../middlewares/validateProducts';

const { productsController } = controllers;
const { validateName, validatePrice } = middlewares;
const productsRoutes = Router();

productsRoutes.post('/', validateName, validatePrice, productsController.addProduct);
productsRoutes.get('/', productsController.getProducts);

export default productsRoutes;
