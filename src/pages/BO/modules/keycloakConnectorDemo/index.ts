import type {ModuleKeycloakConnectorDemoPageInterface} from '@interfaces/BO/modules/keycloakConnectorDemo';

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): ModuleKeycloakConnectorDemoPageInterface {
  return require('@versions/develop/pages/BO/modules/keycloakConnectorDemo');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
