import type {BOCustomerSessionsPageInterface} from '@interfaces/BO/advancedParameters/security/customerSessions';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOCustomerSessionsPageInterface {
  return require('@versions/develop/pages/BO/advancedParameters/security/customerSessions');
}

/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
