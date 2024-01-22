import type {FoCategoryPageInterface} from '@interfaces/FO/category';
import semver from 'semver';

const psVersion = process.env.PS_VERSION ?? '0.0.0';

/* eslint-disable global-require */
function requirePage(): FoCategoryPageInterface {
  if (semver.gte(psVersion, '8.0.0')) {
    return require('@versions/8.0.0/pages/FO/category');
  }
  return require('@versions/8.0.0/pages/FO/category');
}
/* eslint-enable global-require */

export default requirePage();
