import FakerGroup from '@data/faker/group';

export default {
  visitor: new FakerGroup({
    id: 1,
    name: 'Visitor',
    discount: 0,
    shownPrices: true,
  }),
  guest: new FakerGroup({
    id: 2,
    name: 'Guest',
    discount: 0,
    shownPrices: true,
  }),
  customer: new FakerGroup({
    id: 3,
    name: 'Customer',
    discount: 0,
    shownPrices: true,
  }),
};
