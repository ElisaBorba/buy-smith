import express from 'express';
import routes from './routes';

const { productsRoutes, ordersRoutes } = routes;

const app = express();

app.use(express.json());
app.use('/products', productsRoutes);
app.use('/orders', ordersRoutes);

export default app;
