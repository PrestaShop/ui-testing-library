import {type BOTagsPageInterface} from '@interfaces/BO/shopParameters/search/tags';
import {BOTagsPage as BOTagsPageVersion} from '@versions/develop/pages/BO/shopParameters/search/tags';

/**
 * @class
 * @extends BOTagsPageVersion
 */
class BOTagsPage extends BOTagsPageVersion implements BOTagsPageInterface {
  constructor() {
    super();

    // Selectors
    // Header links
    this.addNewTagLink = 'a[data-role=page-header-desc-tag-link]';

  }
}

const boTagsPage = new BOTagsPage();
export {boTagsPage, BOTagsPage};
