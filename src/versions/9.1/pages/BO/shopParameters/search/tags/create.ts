import {type BOTagsCreatePageInterface} from '@interfaces/BO/shopParameters/search/tags/create';
import {BOTagsCreatePage as BOTagsCreatePageVersion} from '@versions/develop/pages/BO/shopParameters/search/tags/create';

/**
 * @class
 * @extends BOTagsPageVersion
 */
class BOTagsCreatePage extends BOTagsCreatePageVersion implements BOTagsCreatePageInterface {
}

const boTagsCreatePage = new BOTagsCreatePage();
export {boTagsCreatePage, BOTagsCreatePage};
