import {type FOMyReturnDetailsPageInterface} from '@interfaces/FO/myAccount/returnDetails';
import {FOMyReturnDetailsPage as FOMyReturnDetailsPageClassic} from '@versions/develop/pages/FO/classic/myAccount/returnDetails';

/**
 * @class
 * @extends FOBasePage
 */
class FOMyReturnDetailsPage extends FOMyReturnDetailsPageClassic implements FOMyReturnDetailsPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use
   */
  constructor() {
    super('hummingbird');

    this.orderReturnCardBlock = 'We have logged your return request. List of items to be returned:';

    this.pageTitleHeader = '#content-wrapper h1';
    this.alertWarning = '#notifications article.alert-warning';
  }
}

module.exports = new FOMyReturnDetailsPage();
