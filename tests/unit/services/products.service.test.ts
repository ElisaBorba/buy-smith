import { expect } from 'chai';
import sinon from 'sinon';
import productsMock from '../../mocks/products.mock'
import productService from '../../../src/services/productsService.service';


describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });

it ('ao receber um corpo com os dados do produto, retorna o produto recém criado e a resposta 201', async function () {
//Arrange
const bodyParameters = productsMock.productBody
//Act
const ServiceResponse = await productService.addProduct(bodyParameters)
//Assert
expect(ServiceResponse.status).to.equal('CREATED');
expect(ServiceResponse.data).to.have.keys(productsMock.productKeys);
})

it ('endpoint GET/products retorna uma lista de produtos', async function () {
  //Act
  const ServiceResponse = await productService.getProducts()
  //Assert
  expect(ServiceResponse.status).to.equal('SUCCESS');
  expect(ServiceResponse.data).to.be.an('array'); 
  expect(ServiceResponse.data).to.not.be.empty; 
  })
});
