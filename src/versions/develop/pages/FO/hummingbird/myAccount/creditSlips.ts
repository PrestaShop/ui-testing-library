import {type FOMyCreditSlipsPageInterface} from '@interfaces/FO/myAccount/creditSlips';
import {FOMyCreditSlipsPage as FOMyCreditSlipsPageClassic} from '@versions/develop/pages/FO/classic/myAccount/creditSlips';

/**
 * @class
 * @extends FOBasePage
 */
class FOMyCreditSlipsPage extends FOMyCreditSlipsPageClassic implements FOMyCreditSlipsPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on create account page
   */
  constructor() {
    super('hummingbird');

    // Selectors
    this.creditSlipsTable = '#content div.grid-table';
    this.creditSlipsTableRows = `${this.creditSlipsTable} div.grid-table__row`;
    // Why "+1" ? Because there is a row before this one (div.grid-table__header)
    this.creditSlipsTableRow = (row: number) => `${this.creditSlipsTableRows}:nth-child(${row + 1})`;
    this.creditSlipsTableColumn = (row: number, column: number) => `${this.creditSlipsTableRow(row)} span.grid-table__cell`
      + `:nth-child(${column})`;
    this.homeLink = 'nav.breadcrumb__wrapper li.breadcrumb-item:nth-child(1) a';
  }
}

const foMyCreditSlipsPage = new FOMyCreditSlipsPage();
export {foMyCreditSlipsPage, FOMyCreditSlipsPage};
