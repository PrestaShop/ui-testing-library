import {type FONewProductsPageInterface} from '@interfaces/FO/newProducts';
import FOBasePage from '@pages/FO/FOBasePage';

/**
 * New products page, contains functions that can be used on the page
 * @class
 * @extends FOBasePage
 */
class FONewProductsPage extends FOBasePage implements FONewProductsPageInterface {
  public readonly pageTitle: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on new products page
   */
  constructor(theme: string = 'classic') {
    super(theme);

    this.pageTitle = 'New products';
  }
}

const foNewProductsPage = new FONewProductsPage();
export {foNewProductsPage, FONewProductsPage};
