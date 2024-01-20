import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import controllers from '../../../src/controllers'
import ordersMock from '../../mocks/orders.mock'
import ordersService from '../../../src/services/ordersService.service';
import { ServiceResponse } from '../../../src/types/ServiceResponse'
import { OrderResponse } from '../../../src/types/Order'

const { ordersController } = controllers;

chai.use(sinonChai);

describe('OrdersController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it ('Endpoint GET /orders retorna uma lista com todos os pedidos (orders) e response 200', async function () {

    const serviceResponse: ServiceResponse<OrderResponse[]> = {
      status: 'SUCCESS',
      data: ordersMock.orderResponseData
    }
    sinon.stub(ordersService, 'getOrders').resolves(serviceResponse);

    //Act
    await ordersController.getOrders(req, res);
    //Assert
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(serviceResponse.data);
});
});
