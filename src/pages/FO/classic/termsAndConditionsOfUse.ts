import type {FOTermsAndConditionsOfUsePageInterface} from '@interfaces/FO/termsAndConditionsOfUse';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): FOTermsAndConditionsOfUsePageInterface {
  return require('@versions/develop/pages/FO/classic/termsAndConditionsOfUse').foTermsAndConditionsOfUsePage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
