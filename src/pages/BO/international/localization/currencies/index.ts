import {type BOCurrenciesPageInterface} from '@interfaces/BO/international/localization/currencies';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOCurrenciesPageInterface {
  return require('@versions/develop/pages/BO/international/localization/currencies');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
