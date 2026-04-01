import {type FoStoresPageInterface} from '@interfaces/FO/stores';
import {FoStoresPage as FoStoresPageVersion} from '@versions/develop/pages/FO/hummingbird/stores';

/**
 * @class
 * @extends FOBasePage
 */
class FoStoresPage extends FoStoresPageVersion implements FoStoresPageInterface {
  /**
   * @constructs
   */
  constructor() {
    super();

    this.storeImage = (idStore:number) => `${this.storeBlock(idStore)} div.store-picture`;
  }
}

const foStoresPage = new FoStoresPage();
export {foStoresPage, FoStoresPage};
