import type {BOProductsCreateTabStocksPageInterface} from '@interfaces/BO/catalog/products/create/tabStocks';
import {StocksTab} from '@versions/8.0/pages/BO/catalog/products/create/tabStocks';
/**
 * Bo product stocks tab, contains functions that can be used on the page
 * @class
 * @extends StocksTab
 */
class BOProductTabStocksVersion extends StocksTab implements BOProductsCreateTabStocksPageInterface {
    protected labelWhenInStockInput: string;
    protected labelWhenOutOfStock: string;
    /**
     * @constructs
     * Setting up texts and selectors to use on stocks tab
     */
    constructor() {
        super();
        this.labelWhenInStockInput = '#form_step3_available_now_2';
        this.labelWhenOutOfStock = '#form_step3_available_later_1';
    }
}
const stocksTab = new BOProductTabStocksVersion();
export {stocksTab, BOProductTabStocksVersion as StocksTab};