import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOOrderSettingsPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;

  getTermsAndConditionsPage(page: Page): Promise<string|null>;
  goToStatusesPage(page: Page): Promise<void>;
  recalculateShippingCostAfterEditingOrder(page: Page, toEnable: boolean): Promise<string>;
  setFinalSummaryStatus(page: Page, toEnable?: boolean): Promise<string>
  setGiftOptions(
    page: Page,
    wantedStatus?: boolean,
    price?: number,
    tax?: string,
    recyclePackagingStatus?: boolean,
  ): Promise<string>;
  setGuestCheckoutStatus(page: Page, toEnable?: boolean): Promise<string>;
  setMinimumPurchaseRequiredTotal(page: Page, value: number): Promise<string>;
  setReorderOptionStatus(page: Page, toEnable?: boolean): Promise<string>;
  setTermsOfService(page: Page, toEnable?: boolean, pageName?: string): Promise<string>
}
