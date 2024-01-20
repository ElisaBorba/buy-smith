import { expect } from 'chai';
import sinon from 'sinon';
import orderService from '../../../src/services/ordersService.service';

describe('OrdersService', function () {
  beforeEach(function () { sinon.restore(); });

    
    it ('Endpoint GET /orders retorna uma lista com todos os pedidos (orders)', async function () {
      //Act
      const serviceResponse = await orderService.getOrders()
      //Assert
      expect(serviceResponse.status).to.equal('SUCCESS');
      expect(serviceResponse.data).to.be.an('array'); 
      })
});
