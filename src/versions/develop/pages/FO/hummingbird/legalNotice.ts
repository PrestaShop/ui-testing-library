import {type FOLegalNoticePageInterface} from '@interfaces/FO/legalNotice';
import {FOLegalNoticePage as FOLegalNoticePageClassic} from '@versions/develop/pages/FO/classic/legalNotice';

/**
 * Contact Us page, contains functions that can be used on the page
 * @class
 * @extends FOBasePage
 */
class FOLegalNoticePage extends FOLegalNoticePageClassic implements FOLegalNoticePageInterface {
  /**
   * @constructs
   */
  constructor() {
    super('hummingbird');
  }
}

module.exports = new FOLegalNoticePage();
