import {type FODeliveryPageInterface} from '@interfaces/FO/delivery';
import FOBasePage from '@pages/FO/FOBasePage';

/**
 * Delivery page, contains functions that can be used on the page
 * @class
 * @extends FOBasePage
 */
class FODeliveryPage extends FOBasePage implements FODeliveryPageInterface {
  public readonly pageTitle: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on delivery page
   */
  constructor(theme: string = 'classic') {
    super(theme);

    this.pageTitle = 'Delivery';
  }
}

const foDeliveryPage = new FODeliveryPage();
export {foDeliveryPage, FODeliveryPage};
