import {BODesignPositionsPageInterface} from '@interfaces/BO/design/positions';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BODesignPositionsPageInterface {
  return require('@versions/develop/pages/BO/design/positions/index');
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
