// Import pages
import {BOCarriersPageInterface} from '@interfaces/BO/shipping/carriers';
import {BOCarriersPage as BOCarriersPageVersion} from '@versions/8.1/pages/BO/shipping/carriers';

class BOCarriersPage extends BOCarriersPageVersion implements BOCarriersPageInterface {
}

const boCarriersPage = new BOCarriersPage();
export {boCarriersPage, BOCarriersPage};
