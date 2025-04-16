/* eslint-disable vars-on-top, no-var */

import {GlobalBO} from '@data/types/globals';

declare global {
  var INSTALL: GlobalInstall;
  var URLHasPort: boolean;
  var FO: GlobalFO;
  var BO: GlobalBO;
  var PSConfig: GlobalPSConfig;
  var BROWSER: GlobalBrowser;
  var GENERATE_FAILED_STEPS: any;
  var SCREENSHOT: GlobalScreenshot;
  var maildevConfig: GlobalMaildevConfig;
  var keycloakConfig: GlobalKeycloakConfig;
  var browserErrors: GlobalBrowserErrors;
}

export {};
