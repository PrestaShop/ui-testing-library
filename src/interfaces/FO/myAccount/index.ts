import {FOBasePagePageInterface} from '@interfaces/FO';
import {type Page} from '@playwright/test';

export interface FoMyAccountPageInterface extends FOBasePagePageInterface {
  readonly pageTitle: string;
  readonly resetPasswordSuccessMessage: string;

  getSuccessMessageAlert(page: Page): Promise<string>;
  goToAddressesPage(page: Page): Promise<void>;
  goToCreditSlipsPage(page: Page): Promise<void>;
  goToHistoryAndDetailsPage(page: Page): Promise<void>;
  goToInformationPage(page: Page): Promise<void>;
  goToMerchandiseReturnsPage(page: Page): Promise<void>;
  goToMyGDPRPersonalDataPage(page: Page): Promise<void>;
  goToMyWishlistsPage(page: Page): Promise<void>;
  goToVouchersPage(page: Page): Promise<void>;
  isAddFirstAddressLinkVisible(page: Page): Promise<boolean>;
}
