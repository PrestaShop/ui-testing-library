import CategoryData from '@data/faker/category';

import type {FakerGroup} from '@data/faker/group';

type CategoryCreator = {
    id?: number
    position?: number
    name?: string
    displayed?: boolean
    description?: string
    metaTitle?: string
    metaDescription?: string
    groupAccess?: FakerGroup
    coverImage?: string
    thumbnailImage?: string
    children?: CategoryData[]
    products?: string[]
    redirectionWhenNotDisplayed?: CategoryRedirection
    redirectedCategory?: CategoryData|null
};

type CategoryFilter = {
    filterBy: string
    value: string
};

type CategoryRedirection = '301'|'302'|'404'|'410';

export {
    CategoryCreator,
    CategoryFilter,
    CategoryRedirection,
};
