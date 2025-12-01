import {type FOMyReturnDetailsPageInterface} from '@interfaces/FO/myAccount/returnDetails';
import {
  FOMyReturnDetailsPage as FOMyReturnDetailsPageVersion,
} from '@versions/develop/pages/FO/hummingbird/myAccount/returnDetails';

/**
 * @class
 * @extends FOBasePage
 */
class FOMyReturnDetailsPage extends FOMyReturnDetailsPageVersion implements FOMyReturnDetailsPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use
   */
  constructor() {
    super();

    this.pageTitleHeader = '#content-wrapper h1';
    this.alertWarning = '#notifications article.alert-warning';
  }
}

const foMyReturnDetailsPage = new FOMyReturnDetailsPage();
export {foMyReturnDetailsPage, FOMyReturnDetailsPage};
