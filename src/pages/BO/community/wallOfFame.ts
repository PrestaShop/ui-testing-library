import {type BOWallOfFamePageInterface} from '@interfaces/BO/community/wallOfFame';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOWallOfFamePageInterface {
  return require('@versions/develop/pages/BO/community/wallOfFame');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
