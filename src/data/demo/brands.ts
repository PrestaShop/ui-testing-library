import BrandData from '@data/faker/brand';

export default {
  brand_1: new BrandData({
    id: 1,
    name: 'Studio Design',
    addresses: 1,
    products: 9,
    enabled: true,
  }),
  brand_2: new BrandData({
    id: 2,
    name: 'Graphic Corner',
    addresses: 0,
    products: 9,
    enabled: true,
  }),
};
