import type {BONewExperimentalFeatures} from '@interfaces/BO/advancedParameters/newExperimentalFeatures';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BONewExperimentalFeatures {
  return require('@versions/develop/pages/BO/advancedParameters/newExperimentalFeatures').newExperimentalFeaturesPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
