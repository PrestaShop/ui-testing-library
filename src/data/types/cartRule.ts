import type FakerCurrency from '@data/faker/currency';
import type FakerCustomer from '@data/faker/customer';
import type FakerProduct from '@data/faker/product';

type CartRuleCreator = {
  name?: string
  description?: string
  code?: string
  generateCode?: boolean
  highlight?: boolean
  partialUse?: boolean
  priority?: number
  status?: boolean
  customer?: FakerCustomer | null
  dateFrom?: string | null
  dateTo?: string | null
  minimumAmount?: CartRuleMinimalAmount
  quantity?: number
  quantityPerUser?: number
  carrierRestriction?: boolean
  countrySelection?: boolean
  countryIDToRemove?: number
  customerGroupSelection?: boolean
  productSelection?: boolean
  productSelectionNumber?: number
  productRestriction?: CartRuleProductSelection[]
  freeShipping?: boolean
  discountType?: string
  discountPercent?: number
  discountAmount?: CartRuleDiscountAmount
  applyDiscountTo?: string
  product?: string | null
  excludeDiscountProducts?: boolean
  freeGift?: boolean
  freeGiftProduct?: FakerProduct | null
};

type CartRuleDiscountAmount = {
  value: number|string,
  currency: string,
  tax: string,
}
type CartRuleMinimalAmount = {
  value: number,
  currency: FakerCurrency,
  tax: string,
  shipping: string,
}

type CartRuleProductSelection = {
  quantity: number,
  ruleType: string,
  values: FakerProduct[],
}

export type {
  CartRuleCreator,
  CartRuleDiscountAmount,
  CartRuleMinimalAmount,
  CartRuleProductSelection,
};
