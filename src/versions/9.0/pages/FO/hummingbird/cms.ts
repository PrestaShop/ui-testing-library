import {type FoCmsPageInterface} from '@interfaces/FO/cms';
import {FoCmsPage as FoCmsPageVersion} from '@versions/develop/pages/FO/hummingbird/cms';

/**
 * @class
 * @extends FoSearchResultsPageVersion
 */
class FoCmsPage extends FoCmsPageVersion implements FoCmsPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on my account page
   */
  constructor() {
    super();

    // Selectors
    this.pageTitle = '#main header h1';
  }
}

const foCmsPage = new FoCmsPage();
export {foCmsPage, FoCmsPage};
