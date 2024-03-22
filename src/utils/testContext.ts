import type {TestInfo} from '@playwright/test';

/**
 * @module TestContextHelper
 * @description Helper for Playwright test context
 */
export default {
  /**
   *
   * @param testInfo {TestInfo} Playwright step context
   * @param title {string} Key of the context to add
   * @param value {string} Specific context value for the step
   * @param baseContext {?string} File contest based on file location
   * @return {Promise<void>}
   */
  async addContextItem(
    testInfo: TestInfo,
    title: string,
    value: string,
    baseContext: string | undefined = undefined,
  ): Promise<void> {
    await testInfo.attachments.push({
      contentType: 'text/plain',
      name: title,
      body: Buffer.from(baseContext === undefined ? value : `${baseContext}_${value}`),
    });

    // Throw an error in step to not execute the rest of it
    if (global.GENERATE_FAILED_STEPS) {
      throw Error('This error is thrown to just generate a report with failed steps');
    }
  },
  /**
   * Return the version of current PrestaShop (depending the env value `PS_VERSION`)
   * * `1.7.8.11` => `7.8.11`
   * * `1.7.8.x` => `7.8.99`
   * * `8.0.1` => `8.0.1`
   * * `8.0.x` => `8.0.99`
   * * `` => `99.99.99`
   * * `develop` => `99.99.99`
   * * `nightly` => `99.99.99`
   * @returns string
   */
  getPSVersion(): string {
    if (!process.env.PS_VERSION
      || process.env.PS_VERSION === 'develop'
      || process.env.PS_VERSION === 'nightly') {
      return '99.99.99';
    }
    const version: string = process.env.PS_VERSION;

    return version
      .replace(/\.x$/, '.99')
      .replace(/^1\.7\./, '7.');
  },
};
