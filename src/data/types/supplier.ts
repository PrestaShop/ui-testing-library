type SupplierCreator = {
  id?: number
  name?: string
  description?: string
  descriptionFr?: string
  homePhone?: string
  mobilePhone?: string
  address?: string
  secondaryAddress?: string
  postalCode?: string
  city?: string
  country?: string
  state?: string
  logo?: string
  metaTitle?: string
  metaTitleFr?: string
  metaDescription?: string
  metaDescriptionFr?: string
  metaKeywords?: string[]
  metaKeywordsFr?: string[]
  enabled?: boolean
  products?: number
};

export default SupplierCreator;
