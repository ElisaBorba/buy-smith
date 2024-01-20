import express from 'express';
import routes from './routes';

const { productsRoutes, ordersRoutes, loginRoutes } = routes;

const app = express();

app.use(express.json());
app.use('/products', productsRoutes);
app.use('/orders', ordersRoutes);
app.use('/login', loginRoutes);

export default app;
