import {type BOTaxRulesCreatePageInterface} from '@interfaces/BO/international/taxes/taxRules/create';
import {BOTaxRulesCreatePage as BOTaxRulesCreatePageVersion} from '@versions/develop/pages/BO/international/taxes/taxRules/create';

class BOTaxRulesCreatePage extends BOTaxRulesCreatePageVersion implements BOTaxRulesCreatePageInterface {

  constructor() {
    super();

    this.pageTitleCreate = 'Tax Rules > Add new';
    this.pageTitleEdit = 'Tax Rules > Edit';
  }
}

const boTaxRulesCreatePage = new BOTaxRulesCreatePage();
export {boTaxRulesCreatePage, BOTaxRulesCreatePage}