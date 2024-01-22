/* eslint-disable vars-on-top, no-var */

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

  // eslint-disable-next-line no-inner-declarations
  function getPSVersion(): string {
    if (!process.env.PS_VERSION) {
      return '0.0.0';
    }
    if (process.env.PS_VERSION === 'nightly') {
      return '99.99.99';
    }
    return process.env.PS_VERSION;
  }
}

export {};
