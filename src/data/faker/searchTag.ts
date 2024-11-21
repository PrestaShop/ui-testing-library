import dataLanguages from '@data/demo/languages';
import dataProducts from '@data/demo/products';
import type FakerLanguage from '@data/faker/language';
import type FakerProduct from '@data/faker/product';
import SearchTagCreator from '@data/types/searchTag';

import {faker} from '@faker-js/faker';

const productsNames: string[] = Object.entries(dataProducts)
  .map((value: [string, FakerProduct]) => {
    if (value[0].startsWith('old_')) {
      return '';
    }
    return value[1].name;
  })
  .filter((value: string) => value !== '');
const languagesNames: string[] = Object.values(dataLanguages).map((language: FakerLanguage) => language.name);

/**
 * Create new tag to use on tag form on BO
 * @class
 */
export default class FakerSearchTag {
  public name: string;

  public language: string;

  public products: string;

  /**
   * Constructor for class FakerSearchTag
   * @param tagsToCreate {TagCreator} Could be used to force the value of some members
   */
  constructor(tagsToCreate: SearchTagCreator = {}) {
    /** @type {string} Name of the tag */
    this.name = tagsToCreate.name || `new_tag_${faker.lorem.word()}`;

    /** @type {string} Language in which the tag should be used */
    this.language = tagsToCreate.language || faker.helpers.arrayElement(languagesNames);

    /** @type {string} Products linked to the tag */
    this.products = tagsToCreate.products || faker.helpers.arrayElement(productsNames);
  }
}
