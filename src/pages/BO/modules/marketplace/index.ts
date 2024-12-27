import type {MarketplacePageInterface} from '@interfaces/BO/modules/marketplace';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): MarketplacePageInterface {
  if (semver.gte(psVersion, '7.6.0')) {
    return require('@versions/mock/pages/BO/modules/marketplace');
  }
  return require('@versions/1.7.5/pages/BO/modules/marketplace');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
