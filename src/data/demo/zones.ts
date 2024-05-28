import FakerZone from '@data/faker/zone';

export default {
  europe: new FakerZone({
    id: 1,
    name: 'Europe',
    status: true,
  }),
  northAmerica: new FakerZone({
    id: 2,
    name: 'North America',
    status: true,
  }),
  asia: new FakerZone({
    id: 3,
    name: 'Asia',
    status: true,
  }),
  africa: new FakerZone({
    id: 4,
    name: 'Africa',
    status: true,
  }),
  oceania: new FakerZone({
    id: 5,
    name: 'Oceania',
    status: true,
  }),
  southAmerica: new FakerZone({
    id: 6,
    name: 'South America',
    status: true,
  }),
  europeNonEu: new FakerZone({
    id: 7,
    name: 'Europe (non-EU)',
    status: true,
  }),
  centralAmericaAntilla: new FakerZone({
    id: 8,
    name: 'Central America/Antilla',
    status: true,
  }),
};
