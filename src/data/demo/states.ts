import FakerState from '@data/faker/state';
import {fakerFR as faker} from '@faker-js/faker';

const states = {
  alaska: new FakerState({
    id: 5,
    name: 'Alaska',
    isoCode: 'AK',
    country: 'United States',
    zone: 'North America',
    status: true,
  }),
  california: new FakerState({
    id: 8,
    name: 'California',
    isoCode: 'CA',
    country: 'United States',
    zone: 'North America',
    status: true,
  }),
  bari: new FakerState({
    id: 134,
    name: 'Bari',
    isoCode: 'BA',
    country: 'Italy',
    zone: 'Europe',
    status: true,
  }),
  bihar: new FakerState({
    id: 8,
    name: 'Bihar',
    isoCode: 'BR',
    country: 'India',
    zone: 'Asia',
    status: true,
  }),
  ontario: new FakerState({
    id: 89,
    name: 'Ontario',
    isoCode: 'ON',
    country: 'Canada',
    zone: 'North America',
    status: true,
  }),
  quebec: new FakerState({
    id: 89,
    name: 'Quebec',
    isoCode: 'QC',
    country: 'Canada',
    zone: 'North America',
    status: true,
  }),
};
export default states;

export function getRandomStateNameByCountryName(countryName: string): string|null {
  const countryStatesNames = Object.values(states)
    .filter((state: FakerState) => state.country === countryName)
    .map((state: FakerState) => state.name);

  if (countryStatesNames.length) {
    return faker.helpers.arrayElement(countryStatesNames);
  }

  return null;
}
