import {type BOTaxRulesPageInterface} from '@interfaces/BO/international/taxes/taxRules';
import {BOTaxRulesPage as BOTaxRulesPageVersion} from '@versions/develop/pages/BO/international/taxes/taxRules';

class BOTaxRulesPage extends BOTaxRulesPageVersion implements BOTaxRulesPageInterface {

  constructor() {
    super();

    // Selectors
    // HEADER buttons
    this.addNewTaxRulesGroupLink = 'a[data-role=page-header-desc-tax_rules_group-link]';

    // Form selectors
    this.gridTable = '#table-tax_rules_group';

    // Table rows and columns
    this.tableBody = `${this.gridTable} tbody`;
    this.tableRow = (row: number) => `${this.tableBody} tr:nth-child(${row})`;
    this.editRowLink = (row: number) => `${this.tableRow(row)} a.edit`;
  }
}

const boTaxRulesPage = new BOTaxRulesPage();
export {boTaxRulesPage, BOTaxRulesPage}