type CatalogPriceRuleCreator = {
  name?: string
  currency?: string
  country?: string
  group?: string
  fromQuantity?: number
  price?: number
  leaveInitialPrice?: boolean
  fromDate?: string
  toDate?: string
  reductionType?: string
  reductionTax?: string
  reduction?: number
};

export default CatalogPriceRuleCreator;
