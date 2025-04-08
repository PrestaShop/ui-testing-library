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

    this.homeLink = 'nav.breadcrumb__wrapper li.breadcrumb-item:nth-child(1) a';
  }
}

module.exports = new FOMyCreditSlipsPage();
