import type {BOPerformancePageInterface} from '@interfaces/BO/advancedParameters/performance';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOPerformancePageInterface {
  return require('@versions/develop/pages/BO/advancedParameters/performance');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
