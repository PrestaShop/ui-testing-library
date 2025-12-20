import {type FoMyVouchersPageInterface} from '@interfaces/FO/myAccount/vouchers';
import {FoMyVouchersPage as FoMyVouchersPageVersion} from '@versions/develop/pages/FO/hummingbird/myAccount/vouchers';

/**
 * @class
 * @extends FOBasePage
 */
class FoMyVouchersPage extends FoMyVouchersPageVersion implements FoMyVouchersPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use
   */
  constructor() {
    super();

    // Selectors
    this.vouchersTable = '#content table.table';
    this.vouchersTableBody = `${this.vouchersTable} tbody`;
    this.vouchersTableRows = `${this.vouchersTableBody} tr`;
    this.vouchersTableRow = (row: number) => `${this.vouchersTableRows}:nth-child(${row})`;
    this.tableColumnCode = (row: number) => `${this.vouchersTableRow(row)} th:nth-child(1)`;
    this.tableColumnDescription = (row: number) => `${this.vouchersTableRow(row)} td:nth-child(2)`;
    this.tableColumnQuantity = (row: number) => `${this.vouchersTableRow(row)} td:nth-child(3)`;
    this.tableColumnValue = (row: number) => `${this.vouchersTableRow(row)} td:nth-child(4)`;
    this.tableColumnMinimum = (row: number) => `${this.vouchersTableRow(row)} td:nth-child(5)`;
    this.tableColumnCumulative = (row: number) => `${this.vouchersTableRow(row)} td:nth-child(6)`;
    this.tableColumnExpirationDate = (row: number) => `${this.vouchersTableRow(row)} td:nth-child(7)`;
  }
}

const foMyVouchersPage = new FoMyVouchersPage();
export {foMyVouchersPage, FoMyVouchersPage};
