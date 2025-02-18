import {type BOSuppliersViewPageInterface} from '@interfaces/BO/catalog/suppliers/view';
import BOBasePage from '@pages/BO/BOBasePage';

/**
 * View supplier page, contains functions that can be used on the page
 * @class
 * @extends BOBasePage
 */
class BOSuppliersViewPage extends BOBasePage implements BOSuppliersViewPageInterface {
  private readonly productsGrid: string;

  private readonly productsGridHeader: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on view supplier page
   */
  constructor() {
    super();

    // Selectors
    this.productsGrid = '[data-role=products-card]';
    this.productsGridHeader = `${this.productsGrid} h3.card-header`;
  }

  /*
  Methods
   */
}

module.exports = new BOSuppliersViewPage();
