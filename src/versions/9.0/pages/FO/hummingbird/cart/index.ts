import {type FoCartHummingbirdPageInterface} from '@interfaces/FO/cart';
import {FoCartPage as FoCartPageVersion} from '@versions/develop/pages/FO/hummingbird/cart';

/**
 * Cart page, contains functions that can be used on the page
 * @class
 * @extends CartPageClassic
 */
class FoCartPage extends FoCartPageVersion implements FoCartHummingbirdPageInterface {
}

const foCartPage = new FoCartPage();
export {foCartPage, FoCartPage};
