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
   * @returns string
   */
  getPSVersion(): string {
    if (!process.env.PS_VERSION) {
      return '0.0.0';
    }
    if (process.env.PS_VERSION === 'nightly') {
      return '99.99.99';
    }
    const version: string = process.env.PS_VERSION;

    return version
      .replace(/^1\.7\./, '7.');
  },
};
