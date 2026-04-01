import {type FoCmsPageInterface} from '@interfaces/FO/cms';
import {FoCmsPage as FoCmsPageClassic} from '@versions/develop/pages/FO/classic/cms';

/**
 * @class
 * @extends FOBasePage
 */
class FoCmsPage extends FoCmsPageClassic implements FoCmsPageInterface {
  /**
   * @constructs
   */
  constructor() {
    super('hummingbird');

    // Selectors
    this.pageTitle = '#wrapper .page-header h1, #wrapper #content.page-content--not-found h1';
  }
}

const foCmsPage = new FoCmsPage();
export {foCmsPage, FoCmsPage};
