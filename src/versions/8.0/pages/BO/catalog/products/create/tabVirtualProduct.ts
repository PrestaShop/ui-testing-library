// Import pages
import type {BOProductsCreateTabVirtualProductPageInterface} from '@interfaces/BO/catalog/products/create/tabVirtualProduct';
import {VirtualProductTab} from '@versions/develop/pages/BO/catalog/products/create/tabVirtualProduct';

/**
 * Virtual product tab in product page, contains functions that can be used on the page
 * @class
 * @extends VirtualProductTab
 */
class VirtualTabVersion extends VirtualProductTab implements BOProductsCreateTabVirtualProductPageInterface {
  /**
     * @constructs
     * Setting up texts and selectors to use on virtual product tab page
     */
  constructor() {
    super();

    this.virtualProductTabLink = '#tab_step3';
    this.productQuantityInput = '#form_step3_qty_0';
    this.productMinimumQuantityInput = '#form_step3_minimal_quantity';
    this.productChooseFile = (toCheck: number) => `#form_step3_virtual_product_is_virtual_file_${toCheck}`;
    this.productFile = '#form_step3_virtual_product_file';
    this.productFileNameInput = '#form_step3_virtual_product_name';
    this.productFileDownloadTimesLimit = '#form_step3_virtual_product_nb_downloadable';
    this.productFileExpirationDate = '#form_step3_virtual_product_expiration_date';
    this.productFileNumberOfDays = '#form_step3_virtual_product_nb_days';
  }
}

const virtualProductTab = new VirtualTabVersion();
export {virtualProductTab, VirtualTabVersion};
