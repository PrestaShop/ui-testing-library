import FakerFeature from '@data/faker/feature';
import FakerFeatureValue from '@data/faker/featureValue';

export default {
  composition: new FakerFeature({
    id: 1,
    position: 1,
    name: 'Composition',
    values: [
      new FakerFeatureValue({
        id: 1,
        value: 'Polyester',
      }),
      new FakerFeatureValue({
        id: 2,
        value: 'Wool',
      }),
      new FakerFeatureValue({
        id: 3,
        value: 'Ceramic',
      }),
      new FakerFeatureValue({
        id: 4,
        value: 'Cotton',
      }),
      new FakerFeatureValue({
        id: 5,
        value: 'Recycled cardboard',
      }),
      new FakerFeatureValue({
        id: 6,
        value: 'Matt paper',
      }),
    ],
  }),
  property: new FakerFeature({
    id: 2,
    position: 2,
    name: 'Property',
    values: [],
  }),
};
