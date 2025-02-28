import {type BOGeolocationPageInterface} from '@interfaces/BO/international/localization/geolocation';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOGeolocationPageInterface {
  return require('@versions/develop/pages/BO/international/localization/geolocation');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
