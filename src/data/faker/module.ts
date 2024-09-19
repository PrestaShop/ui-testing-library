import type {FakerModuleCreator} from '@data/types/module';

/**
 * @class
 */
export default class FakerModule {
  public readonly tag: string;

  public readonly name: string;

  public readonly versionCurrent: string;

  public readonly versionOld: string;

  protected readonly releaseZipUrl: string;

  /**
   * Constructor for class FakerModule
   * @param valueToCreate {FakerModuleCreator} Could be used to force the value of some members
   */
  constructor(valueToCreate: FakerModuleCreator = {}) {
    /** @type {string} Technical Name of the module */
    this.tag = valueToCreate.tag || '';

    /** @type {string} Name of the module */
    this.name = valueToCreate.name || '';

    /** @type {string} Current version of the module */
    this.versionCurrent = valueToCreate.versionCurrent || '';

    /** @type {string} Previous version of the module */
    this.versionOld = valueToCreate.versionOld || '';

    /** @type {string} Release URL */
    this.releaseZipUrl = valueToCreate.releaseZip || '';
  }

  releaseZip(version:string): string {
    return this.releaseZipUrl.replace('%version%', version);
  }
}
