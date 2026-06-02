import {type BOCountriesCreatePageInterface} from '@interfaces/BO/international/locations/countries/create';
import {
  BOCountriesCreatePage as BOCountriesCreatePageVersion,
} from '@versions/develop/pages/BO/international/locations/countries/create';

class BOCountriesCreatePage extends BOCountriesCreatePageVersion implements BOCountriesCreatePageInterface {
  /**
   * @constructs
   */
  constructor() {
    super();

    this.pageTitleCreate = 'Countries > Add new •';
  }
}

const boCountriesCreatePage = new BOCountriesCreatePage();
export {boCountriesCreatePage, BOCountriesCreatePage};
