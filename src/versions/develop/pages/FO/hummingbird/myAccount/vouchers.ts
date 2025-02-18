import {type FoMyVouchersPageInterface} from '@interfaces/FO/myAccount/vouchers';
import {FoMyVouchersPage as FoMyVouchersPageVersion} from '@versions/develop/pages/FO/classic/myAccount/vouchers';

/**
 * @class
 * @extends FOBasePage
 */
class FoMyVouchersPage extends FoMyVouchersPageVersion implements FoMyVouchersPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use
   */
  constructor() {
    super('hummingbird');
  }
}

module.exports = new FoMyVouchersPage();
