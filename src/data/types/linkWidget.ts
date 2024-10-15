import type FakerHook from '@data/faker/hook';

type LinkWidgetCreator = {
  name?: string
  frName?: string
  hook?: FakerHook
  contentPages?: string[]
  productsPages?: string[]
  categoriesPages?: string[]
  staticPages?: string[]
  customPages?: LinkWidgetPage[]
};

type LinkWidgetPage = {
  name: string
  url: string
};

export type {
  LinkWidgetCreator,
  LinkWidgetPage,
};
