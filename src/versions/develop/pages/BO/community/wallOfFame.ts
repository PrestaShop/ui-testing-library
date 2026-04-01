import {type BOWallOfFamePageInterface} from '@interfaces/BO/community/wallOfFame';
import BOBasePage from '@pages/BO/BOBasePage';

/**
 * Wall of Fame page, contains functions that can be used on the page
 * @class
 * @extends BOBasePage
 */
class BOWallOfFamePage extends BOBasePage implements BOWallOfFamePageInterface {
  public readonly pageTitle: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on Wall of Fame page
   */
  constructor() {
    super();

    this.pageTitle = `Wall of Fame • ${global.INSTALL.SHOP_NAME}`;
  }
}

module.exports = new BOWallOfFamePage();
