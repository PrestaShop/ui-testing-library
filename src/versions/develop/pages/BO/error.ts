import {type BOErrorPageInterface} from '@interfaces/BO/error';
import BOBasePage from '@pages/BO/BOBasePage';

/**
 * Error page, contains selectors and functions for the error pages
 * @class
 * @extends BOBasePage
 */
class BOErrorPage extends BOBasePage implements BOErrorPageInterface {
  public readonly notFoundTitle: string;

  /**
   * @constructs
   * Setting up titles and selectors to use on error pages
   */
  constructor() {
    super();

    // Selectors
    this.alertDangerBlockParagraph = '.alert-danger';

    this.notFoundTitle = 'Page not found';
  }
}

module.exports = new BOErrorPage();
