import type FakerGroup from '@data/faker/group';
import ZoneCreator from '@data/types/zone';

type CarrierRangeZone = {
  zone: ZoneCreator | string
  price?: number
}

type CarrierRange = {
  weightMin?: number
  weightMax?: number
  zones: CarrierRangeZone[]
}

type CarrierCreator = {
  id?: number
  position?: number
  name?: string
  transitName?: string
  speedGrade?: number
  trackingURL?: string
  handlingCosts?: boolean
  freeShipping?: boolean
  billing?: string
  taxRule?: string
  outOfRangeBehavior?: string
  maxWidth?: number
  maxHeight?: number
  maxDepth?: number
  maxWeight?: number
  enable?: boolean
  price?: number
  priceText?: string
  priceTTC?: number
  ranges?: CarrierRange[]
  groupAccesses?: FakerGroup[]
};

export type {
  CarrierCreator,
  CarrierRange,
  CarrierRangeZone,
};
