import FakerLinkWidget from '@data/faker/linkWidget';
import dataHooks from '@data/demo/hooks';

export default {
  demo_1: new FakerLinkWidget({
    name: 'Footer test block',
    frName: 'Footer test block',
    hook: dataHooks.displayFooter,
    contentPages: ['Delivery'],
    productsPages: ['New products'],
    staticPages: ['Contact us'],
    customPages: [
      {
        name: 'Home in footer',
        url: global.FO.URL,
      },
    ],
  }),
};
