import FakerCMSPage from '@data/faker/cmsPage';

export default {
  delivery: new FakerCMSPage({
    id: 1,
    url: 'delivery',
    title: 'Delivery',
    metaTitle: '',
    position: 1,
    displayed: true,
  }),
  legalNotice: new FakerCMSPage({
    id: 2,
    url: 'legal-notice',
    title: 'Legal Notice',
    metaTitle: '',
    position: 2,
    displayed: true,
  }),
  termsAndCondition: new FakerCMSPage({
    id: 3,
    url: 'terms-and-conditions-of-use',
    title: 'Terms and conditions of use',
    metaTitle: '',
    position: 3,
    displayed: true,
  }),
  aboutUs: new FakerCMSPage({
    id: 4,
    url: 'about-us',
    title: 'About us',
    metaTitle: '',
    position: 4,
    displayed: true,
  }),
  securePayment: new FakerCMSPage({
    id: 5,
    url: 'secure-payment',
    title: 'Secure payment',
    metaTitle: '',
    position: 5,
    displayed: true,
  }),
};
