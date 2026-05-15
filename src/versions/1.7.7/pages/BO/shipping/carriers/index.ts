// Import pages
import {BOCarriersPageInterface} from '@interfaces/BO/shipping/carriers';
import {BOCarriersPage as BOCarriersPageVersion} from '@versions/1.7.8/pages/BO/shipping/carriers';

class BOCarriersPage extends BOCarriersPageVersion implements BOCarriersPageInterface {
}

const boCarriersPage = new BOCarriersPage();
export {boCarriersPage, BOCarriersPage};
