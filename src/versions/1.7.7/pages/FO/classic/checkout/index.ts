// Import pages
import type {FoCheckoutPageInterface} from '@interfaces/FO/checkout';
import {CheckoutPage as CheckoutVersionPage} from '@versions/develop/pages/FO/classic/checkout';

/**
 * Checkout page, contains functions that can be used on the page
 * @class
 * @extends FOBasePage
 */
class CheckoutPage extends CheckoutVersionPage implements FoCheckoutPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on checkout page
   */
  constructor(theme: string = 'classic') {
    super(theme);

    // Selectors
    // Addresses step selectors
    this.addressStepSection = '#checkout-addresses-step';
    this.addressStepCompanyInput = `${this.addressStepSection} input[name="company"]`;
    this.addressStepAddress1Input = 'input[name="address1"]';
    this.addressStepPostCodeInput = 'input[name="postcode"]';
    this.addressStepCityInput = 'input[name="city"]';
    this.addressStepCountrySelect = 'select[name="id_country"]';
    this.addressStepPhoneInput = 'input[name="phone"]';
    this.stateInput = 'select[name="id_state"]';
  }
}

const checkoutPage = new CheckoutPage();
export {checkoutPage, CheckoutPage};
