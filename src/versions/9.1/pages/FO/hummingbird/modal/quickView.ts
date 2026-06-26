import {type FoModalQuickViewPageInterface} from '@interfaces/FO/modal/quickView';
import {FoModalQuickViewPage as FoModalQuickViewPageVersion} from '@versions/develop/pages/FO/hummingbird/modal/quickView';

/**
 * Quick view modal, contains functions that can be used on the page
 * @class
 * @extends FoModalQuickViewPageVersion
 */
class FoModalQuickViewPage extends FoModalQuickViewPageVersion implements FoModalQuickViewPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on quick view modal
   */
  constructor() {
    super();

    // Quick view modal
    // Before Hummingbird wrapped each thumbnail button in `li.product__thumbnails-item`,
    // the button was a direct child of `ul.product__thumbnails-list`.
    this.quickViewThumbImagePosition = (position: number) => `${this.quickViewModalDiv} ul.product__thumbnails-list `
      + `button:nth-child(${position}) img`;
  }
}

const foModalQuickViewPage = new FoModalQuickViewPage();
export {foModalQuickViewPage, FoModalQuickViewPage};
