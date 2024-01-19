// import OrderModel from '../database/models/order.model';
// import ProductModel from '../database/models/product.model';

// import { Order } from '../types/Order';
// import { ServiceResponse } from '../types/ServiceResponse';

// const getOrders = async ()
// : Promise<ServiceResponse<Order[]>> => {
//   const ordersDB = await OrderModel.findAll({
//     include: [
//       { model: ProductModel, as: 'productIds' },
//     ],
//   });
  
//   //   const allOrders = orders.map((order) => order.dataValues);

//   const ordersData = ordersDB.map((order) => {
//     const orderData = order.toJSON(); 
//     return orderData;
//   });

//   //   const orders = ordersData.map((order) => ({

//   //    
//   //   }));

//   console.log('ORDERS', ordersData);
//   console.log('ORDERS productId', ordersData[0].productId);

//   return { status: 'SUCCESS', data: ordersData };
// };

// export default {
//   getOrders,
// };
