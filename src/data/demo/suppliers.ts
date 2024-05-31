import FakerSupplier from '@data/faker/supplier';

export default {
  fashion: new FakerSupplier({
    id: 1,
    name: 'Fashion supplier',
    products: 17,
    enabled: true,
  }),
  accessories: new FakerSupplier({
    id: 2,
    name: 'Accessories supplier',
    products: 5,
    enabled: true,
  }),
};
