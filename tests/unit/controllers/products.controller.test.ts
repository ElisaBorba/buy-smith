import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import controllers from '../../../src/controllers'
import productsMock from '../../mocks/products.mock'
import productService from '../../../src/services/productsService.service';
import { ServiceResponse } from '../../../src/types/ServiceResponse'
import { Product } from '../../../src/types/Product'

const { productsController } = controllers;

chai.use(sinonChai);

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it ('ao receber um corpo com os dados do produto, retorna o produto recém criado e a resposta 201', async function () {
    //Arrange

    req.body = productsMock.productBody
    req.params = { id: '6' }; 

    const serviceResponse: ServiceResponse<Product> = {
      status: 'CREATED',
      data: productsMock.productWithId
    }
    sinon.stub(productService, 'addProduct').resolves(serviceResponse);

    //Act
    await productsController.addProduct(req, res);
    //Assert
    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(serviceResponse.data);
});

it ('endpoint GET/products retorna uma lista de produtos', async function () {
  //Arrange
  const serviceResponse: ServiceResponse<Product[]> = {
    status: 'SUCCESS',
    data: productsMock.allProductsList
  }
  
  sinon.stub(productService, 'getProducts').resolves(serviceResponse)
  //Act
  await productsController.getProducts(req, res);
  //Assert
  expect(res.status).to.have.been.calledWith(200);
  expect(res.json).to.have.been.calledWith(serviceResponse.data)
  })
});