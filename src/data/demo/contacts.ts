import FakerContact from '@data/faker/contact';

export default {
  webmaster: new FakerContact({
    id: 1,
    title: 'Webmaster',
    email: 'demo@prestashop.com',
    description: 'If a technical problem occurs on this website',
  }),
  customerService: new FakerContact({
    id: 2,
    title: 'Customer service',
    email: 'demo@prestashop.com',
    description: 'For any question about a product, an order',
  }),
};
