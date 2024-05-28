import FakerState from '@data/faker/state';

export default {
  california: new FakerState({
    id: 8,
    name: 'California',
    isoCode: 'CA',
    country: 'United States',
    zone: 'North America',
    status: true,
  }),
  bari: new FakerState({
    id: 134,
    name: 'Bari',
    isoCode: 'BA',
    country: 'Italy',
    zone: 'Europe',
    status: true,
  }),
  bihar: new FakerState({
    id: 8,
    name: 'Bihar',
    isoCode: 'BR',
    country: 'India',
    zone: 'Asia',
    status: true,
  }),
};
