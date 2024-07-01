import type {FoModalQuickViewPageInterface} from '@interfaces/FO/modal/quickView';

/* eslint-disable global-require */
function requirePage(): FoModalQuickViewPageInterface {
  return require('@versions/develop/pages/FO/hummingbird/modal/quickView');
}
/* eslint-enable global-require */

export default requirePage();
