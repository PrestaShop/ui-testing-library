import type {FOLegalNoticePageInterface} from '@interfaces/FO/legalNotice';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): FOLegalNoticePageInterface {
  return require('@versions/develop/pages/FO/hummingbird/legalNotice');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
