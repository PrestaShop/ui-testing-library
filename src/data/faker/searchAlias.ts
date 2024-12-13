import type SearchAliasCreator from '@data/types/searchAlias';

import {faker} from '@faker-js/faker';

/**
 * Create new alias to use on alias creation form on search page on BO
 * @class
 */
export default class FakerSearchAlias {
  public readonly search: string;

  public readonly alias: string;

  /**
   * Constructor for class FakerSearchAlias
   * @param aliasToCreate {Object} Could be used to force the value of some members
   */
  constructor(aliasToCreate: SearchAliasCreator = {}) {
    /** @type {string} */
    this.search = aliasToCreate.search || `search_${faker.lorem.word()}`;

    /** @type {string} */
    this.alias = aliasToCreate.alias || `alias_${faker.lorem.word()}`;
  }
}
