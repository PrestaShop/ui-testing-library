import {type FoAboutUsPageInterface} from '@interfaces/FO/aboutUs';
import {AboutUsPage as AboutUsPageClassic} from '@versions/develop/pages/FO/classic/aboutUs';

/**
 * Contact Us page, contains functions that can be used on the page
 * @class
 * @extends FOBasePage
 */
class AboutUsPage extends AboutUsPageClassic implements FoAboutUsPageInterface {
  /**
   * @constructs
   */
  constructor() {
    super('hummingbird');
  }
}

module.exports = new AboutUsPage();
