import {type FOMyCreditSlipsPageInterface} from '@interfaces/FO/myAccount/creditSlips';
import {FOMyCreditSlipsPage as FOMyCreditSlipsPageVersion} from '@versions/develop/pages/FO/hummingbird/myAccount/creditSlips';

/**
 * @class
 * @extends FOBasePage
 */
class FOMyCreditSlipsPage extends FOMyCreditSlipsPageVersion implements FOMyCreditSlipsPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on create account page
   */
  constructor() {
    super();

    // Selectors
    this.creditSlipsTable = '#content table';
    this.creditSlipsTableRows = `${this.creditSlipsTable} tbody tr`;
    this.creditSlipsTableRow = (row: number) => `${this.creditSlipsTableRows}:nth-child(${row})`;
    this.creditSlipsTableColumn = (row: number, column: number) => `${this.creditSlipsTableRow(row)} td:nth-child(${column})`;
  }
}

const foMyCreditSlipsPage = new FOMyCreditSlipsPage();
export {foMyCreditSlipsPage, FOMyCreditSlipsPage};
