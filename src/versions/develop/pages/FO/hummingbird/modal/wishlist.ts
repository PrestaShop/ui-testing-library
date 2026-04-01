import {FoModalWishlistPageInterface} from '@interfaces/FO/modal/wishlist';
import {FoModalWishlistPage as FoModalWishlistPageClassic} from '@versions/develop/pages/FO/classic/modal/wishlist';

class FoModalWishlistPage extends FoModalWishlistPageClassic implements FoModalWishlistPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on wishlist modal
   */
  constructor() {
    super('hummingbird');

    // Modal "Add to"
    this.modalAddToCreateNewList = `${this.modalAddTo} .modal-footer div[role="button"].wishlist-add-to-new`;
  }
}

const foModalWishlistPage = new FoModalWishlistPage();
export {foModalWishlistPage, FoModalWishlistPage};
