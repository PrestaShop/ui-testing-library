import {type FoBestSalesPageInterface} from '@interfaces/FO/bestSales';
import FOBasePage from '@pages/FO/FOBasePage';

/**
 * Best sales page, contains functions that can be used on the page
 * @class
 * @extends FOBasePage
 */
class FoBestSalesPage extends FOBasePage implements FoBestSalesPageInterface {
  public readonly pageTitle: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on best sales page
   */
  constructor(theme: string = 'classic') {
    super(theme);

    this.pageTitle = 'Best sellers';
  }
}

const foBestSalesPage = new FoBestSalesPage();
export {foBestSalesPage, FoBestSalesPage};
