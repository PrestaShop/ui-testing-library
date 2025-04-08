import {type FOLegalNoticePageInterface} from '@interfaces/FO/legalNotice';
import FOBasePage from '@pages/FO/FOBasePage';

/**
 * Legal notice page, contains functions that can be used on the page
 * @class
 * @extends FOBasePage
 */
class FOLegalNoticePage extends FOBasePage implements FOLegalNoticePageInterface {
  public readonly pageTitle: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on legal notice page
   */
  constructor(theme: string = 'classic') {
    super(theme);

    this.pageTitle = 'Legal Notice';
  }
}

const foLegalNoticePage = new FOLegalNoticePage();
export {foLegalNoticePage, FOLegalNoticePage};
