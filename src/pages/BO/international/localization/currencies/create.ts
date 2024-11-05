import type {BOCurrenciesCreatePageInterface} from '@interfaces/BO/international/localization/currencies/create';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOCurrenciesCreatePageInterface {
  return require('@versions/develop/pages/BO/international/localization/currencies/create');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
