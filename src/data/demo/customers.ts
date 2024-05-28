import SocialTitles from '@data/demo/socialTitles';
import FakerCustomer from '@data/faker/customer';

export default {
  johnDoe: new FakerCustomer({
    id: 2,
    socialTitle: SocialTitles.Mr.name,
    firstName: 'John',
    lastName: 'DOE',
    birthDate: new Date('1970-01-15'),
    email: 'pub@prestashop.com',
    password: '123456789',
    enabled: true,
    newsletter: true,
    partnerOffers: true,
    defaultCustomerGroup: 'Customer',
  }),
};
