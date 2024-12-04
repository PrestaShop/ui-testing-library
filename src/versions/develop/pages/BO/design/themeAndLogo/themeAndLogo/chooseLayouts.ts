import {type BOThemeAndLogoChooseLayoutsPageInterface} from '@interfaces/BO/design/themeAndLogo/themeAndLogo/chooseLayouts';
import BOThemeAndLogoBasePage from '@pages/BO/design/themeAndLogo/base';

/**
 * Theme import page, contains functions that can be used on the page
 * @class
 * @extends BOThemeAndLogoBasePage
 */
class BOThemeAndLogoChooseLayoutsPage extends BOThemeAndLogoBasePage implements BOThemeAndLogoChooseLayoutsPageInterface {
  public readonly pageTitle: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on theme & logo page
   */
  constructor() {
    super();

    this.pageTitle = `Choose layouts • ${global.INSTALL.SHOP_NAME}`;
  }
}

module.exports = new BOThemeAndLogoChooseLayoutsPage();
