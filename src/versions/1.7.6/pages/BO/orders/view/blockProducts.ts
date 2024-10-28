// Import pages
import type {BOProductBlockProductsPageInterface} from '@interfaces/BO/orders/view/blockProducts';
import {BOProductBlockProductsPage} from '@versions/develop/pages/BO/orders/view/blockProducts';

/**
 * View orders page, contains functions that can be used in the block products
 * @class
 * @extends OrdersPage
 */
class ProductsBlockOrdersPageVersion extends BOProductBlockProductsPage implements BOProductBlockProductsPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on products block in view order page
   */
  constructor() {
    super();
    this.orderProductsTable = '#orderProducts';
    this.editProductButton = (row: number) => `${this.orderProductsRowTable(row)} button.edit_product_change_link`;
    this.productQuantitySpan = (row: number) => `${this.orderProductsRowTable(row)} td.productQuantity`;
    // Edit row table
    this.orderProductsEditRowTable = `${this.orderProductsTable} tbody tr.product-line-row`;
    this.editProductQuantityInput = `${this.orderProductsEditRowTable} input.edit_product_quantity`;
    this.updateProductButton = `${this.orderProductsEditRowTable} button.submitProductChange`;
  }
}

const productsBlockOrdersPage = new ProductsBlockOrdersPageVersion();
export {productsBlockOrdersPage, ProductsBlockOrdersPageVersion as ProductsBlockOrdersPage};
