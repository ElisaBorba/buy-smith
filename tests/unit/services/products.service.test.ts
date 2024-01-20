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
const serviceResponse = await productService.addProduct(bodyParameters)
//Assert
expect(serviceResponse.status).to.equal('CREATED');
expect(serviceResponse.data).to.have.keys(productsMock.productKeys);
})

it ('endpoint GET/products retorna uma lista de produtos', async function () {
  //Act
  const serviceResponse = await productService.getProducts()
  //Assert
  expect(serviceResponse.status).to.equal('SUCCESS');
  expect(serviceResponse.data).to.be.an('array'); 
  expect(serviceResponse.data).to.not.be.empty; 
  })
});
