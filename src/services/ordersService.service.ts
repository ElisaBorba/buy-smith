import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';

import { OrderResponse, OrderWithProduct } from '../types/Order';
import { ServiceResponse } from '../types/ServiceResponse';

const getOrders = async ()
: Promise<ServiceResponse<OrderResponse[]>> => {
  const ordersDB = await OrderModel.findAll({
    include: [
      { model: ProductModel, as: 'productIds' },
    ],
  });
  
  const orderDatavalues = ordersDB.map((order) => order.dataValues) as OrderWithProduct[];

  const orderReturn = orderDatavalues.map((order) => {
    const productIds = order.productIds.map((product) => product.id);

    return {
      ...order,
      productIds,
    };
  });
  
  console.log('TENTANDO TIPAR', orderReturn);

  return { status: 'SUCCESS', data: orderReturn };
};

export default {
  getOrders,
};
