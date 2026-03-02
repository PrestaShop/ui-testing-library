type DiscountCreator = {
  discountType?: string | null
  name?: string
  description?: string
  dateFrom?: string | null
  dateTo?: string | null
  allCustomers?: boolean
  customerGroups?: boolean
  singleCustomer?: boolean
  noProductCondition?: boolean
  singleProduct?: boolean
  productSegment?: boolean
  noCartCondition?: boolean
  minimumPurchaseAmount?: boolean
  minimumAmountValue?: number | string
  minimumAmountCurrency?: string | null
  minimumAmountTax?: string | null
  minimumProductQuantity?: boolean
  productQuantity?: number
  discountValue?: number | string
  discountReductionType?: string
  discountCurrency?: string | null
  discountTax?: string | null
  createAutomaticDiscount?: boolean
  generateDiscountCode?: boolean
  discountCode?: string
};

export default DiscountCreator;
