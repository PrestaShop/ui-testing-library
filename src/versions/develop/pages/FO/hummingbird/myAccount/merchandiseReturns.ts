import {FoMyMerchandiseReturnsPageInterface} from '@interfaces/FO/myAccount/merchandiseReturns';
import {
  MyMerchandiseReturnsPage as MyMerchandiseReturnsPageVersion,
} from '@versions/develop/pages/FO/classic/myAccount/merchandiseReturns';

/**
 * My account page, contains functions that can be used on the page
 * @class
 * @extends FOBasePage
 */
class MyMerchandiseReturnsPage extends MyMerchandiseReturnsPageVersion implements FoMyMerchandiseReturnsPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use
   */
  constructor() {
    super('hummingbird');
  }
}

module.exports = new MyMerchandiseReturnsPage();
