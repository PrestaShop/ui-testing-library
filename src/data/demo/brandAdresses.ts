import BrandAddressData from '@data/faker/brandAddress';

export default {
  brandAddress_3: new BrandAddressData({
    id: 3,
    brandName: '',
    firstName: 'supplier',
    lastName: 'supplier',
    postalCode: '10153',
    city: 'New York',
    country: 'United States',
  }),
  brandAddress_4: new BrandAddressData({
    id: 4,
    brandName: 'Studio Design',
    firstName: 'manufacturer',
    lastName: 'manufacturer',
    postalCode: '10154',
    city: 'New York',
    country: 'United States',
  }),
};
