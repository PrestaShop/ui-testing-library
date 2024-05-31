import FakerSeoPage from '@data/faker/seoPage';

export default {
  pageNotFound: new FakerSeoPage({
    id: 1,
    page: 'pagenotfound',
    title: '404 error',
    friendlyUrl: 'page-not-found',
  }),
  best_sales: new FakerSeoPage({
    id: 2,
    page: 'best-sales',
    title: 'Best sales',
    friendlyUrl: 'best-sales',
  }),
  contact: new FakerSeoPage({
    id: 3,
    page: 'contact',
    title: 'Contact us',
    friendlyUrl: 'contact-us',
  }),
  orderReturn: new FakerSeoPage({
    page: 'order-return',
    title: 'Order return',
    friendlyUrl: 'order-return',
  }),
  pdfOrderReturn: new FakerSeoPage({
    page: 'pdf-order-return',
    title: 'Pdf order return',
    friendlyUrl: 'pdf-order-return',
  }),
};
