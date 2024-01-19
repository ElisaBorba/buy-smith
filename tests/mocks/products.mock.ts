const productBody = {
    "name": "Martelo de Thor",
    "price": "30 peças de ouro",
    "orderId": 4
}

const productWithId = {
    id: 6,
    ...productBody,
  };

const productKeys = ['id', 'name', 'price', 'orderId']

const allProductsList = [
    {
      "id": 1,
      "name": "Excalibur",
      "price": "10 peças de ouro",
      "orderId": 1
    },
    {
      "id": 2,
      "name": "Espada Justiceira",
      "price": "20 peças de ouro",
      "orderId": 1
    },
  ]

export default {
    productBody,
    productKeys,
    productWithId,
    allProductsList,
};