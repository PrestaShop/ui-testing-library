import FakerCarrier from '@data/faker/carrier';

export default {
  clickAndCollect: new FakerCarrier({
    id: 1,
    name: 'Click and collect',
    transitName: 'Pick up in-store',
    enable: true,
    freeShipping: true,
    position: 1,
  }),
  myCarrier: new FakerCarrier({
    id: 2,
    name: 'My carrier',
    transitName: 'Delivery next day!',
    priceTTC: 8.40,
    price: 7.00,
    enable: true,
    freeShipping: false,
    position: 2,
  }),
  myCheapCarrier: new FakerCarrier({
    id: 3,
    name: 'My cheap carrier',
    transitName: 'Buy more to pay less!',
    enable: false,
    freeShipping: false,
    priceTTC: 6.00,
    position: 3,
  }),
  myLightCarrier: new FakerCarrier({
    id: 4,
    name: 'My light carrier',
    transitName: 'The lighter the cheaper!',
    enable: false,
    freeShipping: false,
    position: 4,
  }),
};
