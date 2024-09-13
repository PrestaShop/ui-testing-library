import type {BODbBackupPageInterface} from '@interfaces/BO/advancedParameters/database/dbBackup';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BODbBackupPageInterface {
  return require('@versions/develop/pages/BO/advancedParameters/database/dbBackup');
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
