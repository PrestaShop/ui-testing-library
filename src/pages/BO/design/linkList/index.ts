import {BODesignLinkListPageInterface} from '@interfaces/BO/design/linkList';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BODesignLinkListPageInterface {
  return require('@versions/develop/pages/BO/design/linkList');
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
