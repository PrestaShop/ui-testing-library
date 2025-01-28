// Import FO pages
import {FoSitemapPage as FoSitemapPageClassic} from '@versions/develop/pages/FO/classic/sitemap';

/**
 * @class
 * @extends FOBasePage
 */
class FoSitemapPage extends FoSitemapPageClassic {
  /**
   * @constructs
   */
  constructor() {
    super('hummingbird');
  }
}

module.exports = new FoSitemapPage();
