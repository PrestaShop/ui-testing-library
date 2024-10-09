import type ShopCreator from '@data/types/shop';

import {faker} from '@faker-js/faker';

/**
 * Create new shop to use on shop creation form on BO
 * @class
 */
export default class FakerShop {
  public id: number;

  public readonly name: string;

  public readonly shopGroup: string;

  public readonly color: string;

  public readonly categoryRoot: string;

  public readonly theme: string;

  /**
   * Constructor for class ShopGroupData
   * @param shopToCreate {ShopCreator} Could be used to force the value of some members
   */
  constructor(shopToCreate: ShopCreator) {
    /** @type {number} ID of the shop */
    this.id = 0;

    /** @type {string} Name of the shop */
    this.name = shopToCreate.name || `shop_${faker.lorem.word()}`;

    /** @type {string} Shop group chosen from list */
    this.shopGroup = shopToCreate.shopGroup;

    /** @type {string} Color of the shop */
    this.color = shopToCreate.color || '#00a7ac';

    /** @type {string} Root category of the shop */
    this.categoryRoot = shopToCreate.categoryRoot;

    /** @type {string} Front Theme of the shop */
    this.theme = shopToCreate.theme || 'classic';
  }

  /**
     * @param {number} id
     */
  setID(id: number): this {
    this.id = id;

    return this;
  }
}
