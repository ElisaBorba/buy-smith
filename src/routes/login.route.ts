import { Router } from 'express';
import controllers from '../controllers';

const { loginController } = controllers;
const loginRoutes = Router();

loginRoutes.post('/', loginController.login);

export default loginRoutes;
