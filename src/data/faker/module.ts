import type {FakerModuleCreator} from '@data/types/module';

/**
 * @class
 */
export default class FakerModule {
  public readonly tag: string;

  public readonly name: string;

  public readonly releaseZip: string;

  /**
   * Constructor for class FakerModule
   * @param valueToCreate {FakerModuleCreator} Could be used to force the value of some members
   */
  constructor(valueToCreate: FakerModuleCreator = {}) {
    /** @type {string} Technical Name of the module */
    this.tag = valueToCreate.tag || '';

    /** @type {string} Name of the module */
    this.name = valueToCreate.name || '';

    /** @type {string} Release URL */
    this.releaseZip = valueToCreate.releaseZip || '';
  }
}
