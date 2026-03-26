// Import pages

import {FoSearchResultsPageInterface} from '@interfaces/FO/searchResults';
import {type Page} from '@playwright/test';
import {SearchResultsPage} from '@versions/develop/pages/FO/classic/searchResults';

/**
 * FO search Results page, contains functions that can be used on the page
 * @class
 * @extends SearchResultsPage
 */
class FoSearchResultsPageVersion extends SearchResultsPage implements FoSearchResultsPageInterface {
  /**
     * @constructs
     * Setting up texts and selectors to use on search results page
     */
  constructor(theme: string = 'classic') {
    super(theme);
  }
}

const searchResultsPage = new FoSearchResultsPageVersion();
export {searchResultsPage, FoSearchResultsPageVersion as SearchResultsPage};
