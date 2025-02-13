import type FakerBrand from '@data/faker/brand';

type ProductAttribute = {
  name: string
  value: string
};

type ProductAttributes = {
  name: string
  values: string[]
};

type ProductCreator = {
  id?: number
  name?: string
  nameFR?: string
  defaultImage?: string | null
  coverImage?: string | null
  thumbImage?: string | null
  thumbImageFR?: string | null
  category?: string
  type?: string
  status?: boolean
  applyChangesToAllStores?: boolean
  summary?: string
  description?: string
  descriptionFR?: string
  reference?: string
  mpn?: string | null
  upc?: string | null
  ean13?: string | null
  isbn?: string | null
  features?: ProductFeatures[]
  files?: ProductFiles[]
  displayCondition?: boolean
  condition?: string
  customizations?: ProductCustomizations[]
  quantity?: number
  tax?: number
  price?: number
  retailPrice?: number
  finalPrice?: number
  priceTaxExcluded?: number
  onSale?: boolean
  productHasCombinations?: boolean
  attributes?: ProductAttributes[]
  pack?: ProductPackItem[]
  taxRule?: string
  ecoTax?: number
  specificPrice?: ProductSpecificPrice
  minimumQuantity?: number
  stockLocation?: string
  lowStockLevel?: number
  labelWhenInStock?: string
  labelWhenOutOfStock?: string
  behaviourOutOfStock?: string
  customization?: ProductCustomization
  downloadFile?: boolean
  fileName?: string
  allowedDownload?: number
  expirationDate?: string | null
  numberOfDays?: number | null
  packageDimensionWeight?: number
  packageDimensionDepth?: number
  packageDimensionHeight?: number
  packageDimensionWidth?: number
  deliveryTime?: string
  combinations?: ProductCombination[]
  metaTitle?: string | null
  metaDescription?: string | null
  friendlyUrl?: string | null
  brand?: FakerBrand | null
  tags?: string
};

type ProductCombination = {
  name: string
  price: number
};

type ProductFeatures = {
  featureName: string,
  preDefinedValue?: string,
  customizedValueEn?: string,
  customizedValueFr?: string,
}

type ProductFiles = {
  fileName: string,
  description: string,
  file: string,
}

type ProductCombinationOptions = {
  reference: string
  impactOnPriceTExc: number
  quantity: number
  minimalQuantity?: number
}

type ProductCombinationBulk = {
  stocks: ProductCombinationBulkStock
  retailPrice: ProductCombinationBulkRetailPrice
  specificReferences: ProductCombinationBulkSpecificReferences
}

type ProductCombinationBulkRetailPrice = {
  costPriceToEnable: boolean
  costPrice?: number
  impactOnPriceTIncToEnable: boolean
  impactOnPriceTInc?: number
  impactOnWeightToEnable: boolean
  impactOnWeight?: number
}

type ProductCombinationBulkSpecificReferences = {
  referenceToEnable: boolean
  reference?: string
}

type ProductCombinationBulkStock = {
  quantityToEnable: boolean
  quantity?: number
  minimalQuantityToEnable: boolean
  minimalQuantity?: number
  stockLocationToEnable: boolean
  stockLocation?: string
};

type ProductCustomization = {
  label: string
  type: string
  required: boolean
};

type ProductCustomizations = {
  label: string
  type: string
  required: boolean
};

type ProductDetailsBasic = {
  image?: string
  name: string
  price: number
  quantity?: number
};

type ProductDetails = ProductDetailsBasic & {
  summary?: string
  description?: string
  shipping?: string
  subtotal?: number
  coverImage?:string,
  thumbImage?:string,
  taxShippingDeliveryLabel?: string,
  shortDescription?: string,
};

type ProductDetailsWithDiscount = ProductDetailsBasic & {
  discountAmount: string,
  discountPercentage: string,
  regularPrice: number,
  subtotal?: number,
  taxShippingDeliveryLabel?: string,
  coverImage?:string,
  thumbImage?:string,
  shortDescription?: string
  totalPrice?: number
};

type ProductDiscount = {
  name: string
  type: string
  value: string
};

type ProductFilterMinMax = {
  min: number
  max: number
}

type ProductPricingCatalogPriceRule = {
  id: string
  name: string
  currency: string
  country: string
  group: string
  store: string
  discount: string
  fromQuantity: number
}

type ProductPricingSummary = {
  priceTaxExcludedValue: string
  priceTaxIncludedValue: string
  marginValue: string
  marginRateValue: string
  wholesalePriceValue: string
}

type ProductHeaderSummary = {
  imageUrl: string
  reference: string
  quantity: string
  priceTaxIncl: string
  priceTaxExc: string
  mpn: string
  upc: string
  ean_13: string
  isbn: string
};

type ProductInformations = {
  name: string
  price: number
  summary: string
  description: string
};

type ProductImageUrls = {
  coverImage: string
  thumbImage: string
};

type ProductImageInformation = {
  id: number,
  isCover: boolean,
  position: number,
  caption: {
    en: string,
    fr: string
  },
};

type ProductPackItem = {
  reference: string
  quantity: number
};

type ProductPackInformation = ProductPackItem & {
  image: string
  name: string
};

type ProductPackOptions = {
  quantity: number
  minimalQuantity: number
  packQuantitiesOption: string
};

type ProductReviewCreator = {
  reviewTitle?: string;
  reviewContent?: string;
  reviewRating?: number;
};

type ProductSpecificPrice = {
  attributes: number | null
  discount: number
  startingAt: number
  reductionType: string
};

type ProductStockMovement = {
  dateTime: string
  quantity: number
  employee: string
};

type ProductOrderConfirmation = {
  image: string
  details: string
  prices: string
};

export type {
  ProductAttribute,
  ProductAttributes,
  ProductCombination,
  ProductCombinationOptions,
  ProductCombinationBulk,
  ProductCombinationBulkRetailPrice,
  ProductCombinationBulkSpecificReferences,
  ProductCombinationBulkStock,
  ProductCreator,
  ProductCustomization,
  ProductDetails,
  ProductDetailsBasic,
  ProductDetailsWithDiscount,
  ProductDiscount,
  ProductFilterMinMax,
  ProductHeaderSummary,
  ProductImageUrls,
  ProductImageInformation,
  ProductInformations,
  ProductOrderConfirmation,
  ProductPackItem,
  ProductPackInformation,
  ProductPackOptions,
  ProductPricingSummary,
  ProductPricingCatalogPriceRule,
  ProductReviewCreator,
  ProductSpecificPrice,
  ProductStockMovement,
  ProductFeatures,
  ProductFiles,
  ProductCustomizations,
};
