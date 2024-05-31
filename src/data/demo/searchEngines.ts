import FakerSearchEngine from '@data/faker/searchEngine';

export default {
  google: new FakerSearchEngine({
    id: 1,
    server: 'google',
    queryKey: 'q',
  }),
  lycos: new FakerSearchEngine({
    id: 8,
    server: 'lycos',
    queryKey: 'query',
  }),
  voila: new FakerSearchEngine({
    id: 11,
    server: 'voila',
    queryKey: 'rdata',
  }),
};
