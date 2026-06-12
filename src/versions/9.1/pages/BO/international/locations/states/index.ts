import {type BOStatesPageInterface} from '@interfaces/BO/international/locations/states';
import {type Page} from '@playwright/test';
import {BOStatesPage as BOStatesPageVersion} from '@versions/develop/pages/BO/international/locations/states';

/**
 * States page, contains functions that can be used on the page
 * @class
 * @extends BOStatesPageVersion
 */
class BOStatesPage extends BOStatesPageVersion implements BOStatesPageInterface {
  /**
   * Set state status
   * @param page {Page} Browser tab
   * @param row {number} Row on table
   * @param wantedStatus {boolean} True if we need to enable status, false if not
   * @return {Promise<boolean>}, true if the status has been successfully updated
   */
  async setStateStatus(page: Page, row: number, wantedStatus: boolean): Promise<boolean> {
    if (wantedStatus !== await this.getStateStatus(page, row)) {
      // In 9.1.x the toggle is an async action displaying a growl message (no page reload)
      const [message] = await Promise.all([
        this.getGrowlMessageContent(page),
        page.locator(this.tableColumnStatusToggle(row)).click(),
      ]);

      await this.closeGrowlMessage(page);
      return message === this.successfulUpdateStatusMessage;
    }

    return false;
  }
}

const boStatesPage = new BOStatesPage();
export {boStatesPage, BOStatesPage};
