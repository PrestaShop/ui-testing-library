import FakerTitle from '@data/faker/title';

export default {
  Mrs: new FakerTitle({
    id: 2,
    name: 'Mrs.',
    gender: 'Female',
  }),
  Mr: new FakerTitle({
    id: 1,
    name: 'Mr.',
    gender: 'Male',
  }),
};
