import type {
  ImportAddress,
  ImportBrand,
  ImportCategory,
  ImportCombination,
  ImportCreator,
  ImportCustomer,
  ImportHeaderItem,
  ImportProduct,
} from '@data/types/import';

/**
 * @class
 */
export default class FakerImport {
  public readonly entity: string;

  public readonly header: ImportHeaderItem[];

  public readonly records: ImportAddress[]|ImportBrand[]|ImportCategory[]|ImportCombination[]|ImportCustomer[]|ImportProduct[];

  /**
   * Constructor for class FakerImport
   * @param valueToCreate {ImportCreator} Could be used to force the value of some members
   */
  constructor(valueToCreate: ImportCreator) {
    this.entity = valueToCreate.entity;
    this.header = valueToCreate.header;
    this.records = valueToCreate.records;
  }
}
