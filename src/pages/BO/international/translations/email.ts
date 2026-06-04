import {type BOTranslationsEmailPageInterface} from '@interfaces/BO/international/translations/email';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOTranslationsEmailPageInterface {
  return require('@versions/develop/pages/BO/international/translations/email').boTranslationsEmailPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
