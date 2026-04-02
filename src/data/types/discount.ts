import type FakerCountry from '@data/faker/country';
import type FakerProduct from '@data/faker/product';

type DiscountCreator = {
  discountType?: string | null
  name?: string
  description?: string
  dateFrom?: string | null
  dateTo?: string | null
  neverExpires?: boolean
  allCustomers?: boolean
  customerGroups?: boolean
  singleCustomer?: boolean
  noProductCondition?: boolean
  singleProduct?: boolean
  specificProduct?: FakerProduct | null
  productSegment?: boolean
  noCartCondition?: boolean
  minimumPurchaseAmount?: boolean
  minimumAmountValue?: number | string
  minimumAmountCurrency?: string | null
  minimumAmountTax?: string | null
  minimumProductQuantity?: boolean
  productQuantity?: number | string
  discountValue?: number | string
  discountReductionType?: string
  discountCurrency?: string | null
  discountTax?: string | null
  createAutomaticDiscount?: boolean
  deliveryConditionsCountries?: FakerCountry[]
  generateDiscountCode?: boolean
  discountCode?: string
  freeGift?: FakerProduct | null
};

export default DiscountCreator;
