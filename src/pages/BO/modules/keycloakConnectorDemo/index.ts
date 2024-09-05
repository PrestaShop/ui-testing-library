import type {ModuleKeycloakConnectorDemoPageInterface} from '@interfaces/BO/modules/keycloakConnectorDemo';

/* eslint-disable global-require */
function requirePage(): ModuleKeycloakConnectorDemoPageInterface {
  return require('@versions/develop/pages/BO/modules/keycloakConnectorDemo');
}
/* eslint-enable global-require */

export default requirePage();
