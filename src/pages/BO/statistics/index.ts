import type {BOStatisticsPageInterface} from '@interfaces/BO/statistics';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOStatisticsPageInterface {
  return require('@versions/develop/pages/BO/statistics');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
