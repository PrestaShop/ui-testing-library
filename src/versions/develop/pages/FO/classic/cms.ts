import {type FoCmsPageInterface} from '@interfaces/FO/cms';
import FOBasePage from '@pages/FO/FOBasePage';

/**
 * CMS page, contains functions that can be used on the page
 * @class
 * @extends FOBasePage
 */
class FoCmsPage extends FOBasePage implements FoCmsPageInterface {
  public readonly pageNotFound: string;

  public readonly pageTitle: string;

  public readonly pageContent: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on cms page
   */
  constructor(theme: string = 'classic') {
    super(theme);
    this.pageNotFound = 'The page you are looking for was not found.';

    // Selectors
    this.pageTitle = '#main header h1';
    this.pageContent = '#content';
  }
}

const foCmsPage = new FoCmsPage();
export {foCmsPage, FoCmsPage};
