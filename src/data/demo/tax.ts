import FakerTax from '@data/faker/tax';

export default {
  DefaultFrTax: new FakerTax({
    id: 1,
    name: 'TVA FR 20%',
    rate: '20',
    enabled: true,
  }),
  VatUkTax: new FakerTax({
    id: 15,
    name: 'VAT UK 20%',
    rate: '20',
    enabled: true,
  }),
};
