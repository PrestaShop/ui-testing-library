import {type FOPricesDropPageInterface} from '@interfaces/FO/pricesDrop';
import FOBasePage from '@pages/FO/FOBasePage';

/**
 * Prices drop page, contains functions that can be used on the page
 * @class
 * @extends FOBasePage
 */
class FOPricesDropPage extends FOBasePage implements FOPricesDropPageInterface {
  public readonly pageTitle: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on prices drop page
   */
  constructor(theme: string = 'classic') {
    super(theme);

    this.pageTitle = 'Prices drop';
  }
}

const foPricesDropPage = new FOPricesDropPage();
export {foPricesDropPage, FOPricesDropPage};
