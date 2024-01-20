import { Product } from './Product';

export type Order = {
  id: number;
  userId: number;
  productId?: number | undefined;
};

export type OrderWithProduct = {
  id: number;
  userId: number;
  productIds: Product[];
};

export type OrderResponse = {
  id: number;
  userId: number;
  productIds: number[];
};
