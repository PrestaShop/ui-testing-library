import dataLanguages from '@data/demo/languages';
import {ModuleBlockwishlistMainPageInterface} from '@interfaces/BO/modules/blockwishlist';
import ModuleConfiguration from '@pages/BO/modules/moduleConfiguration';
import type {Page} from '@playwright/test';

/**
 * Module configuration page for module : blockwishlist, contains selectors and functions for the page
 * @class
 * @extends ModuleConfiguration
 */
class Blockwishlist extends ModuleConfiguration implements ModuleBlockwishlistMainPageInterface {
  public readonly pageTitle: string;

  public readonly defaultValueWishlistDefaultTitle: string;

  public readonly defaultValueCreateButtonLabel: string;

  public readonly defaultValueWishlistPageName: string;

  private readonly headTabs: string;

  private readonly headTab: string;

  private readonly headTabNamed: (name: string) => string;

  private readonly formConfiguration: string;

  private readonly wishlistDefaultTitleInput: (langId: number) => string;

  private readonly createButtonLabelInput: (langId: number) => string;

  private readonly wishlistPageNameInput: (langId: number) => string;

  private readonly formConfigurationBtn: string;

  /**
   * @constructs
   */
  constructor() {
    super();

    this.pageTitle = `Configuration • ${global.INSTALL.SHOP_NAME}`;
    this.defaultValueWishlistDefaultTitle = 'My wishlist';
    this.defaultValueCreateButtonLabel = 'Create new list';
    this.defaultValueWishlistPageName = 'My wishlists';

    // Selectors
    this.headTabs = '#head_tabs';
    this.headTab = `${this.headTabs} .nav-item`;
    this.headTabNamed = (name: string) => `${this.headTab} #subtab-Wishlist${name}AdminController`;

    this.formConfiguration = 'form[name="configuration"]';
    this.wishlistDefaultTitleInput = (langId: number) => `${this.formConfiguration
    } #configuration_WishlistDefaultTitle_${langId}`;
    this.createButtonLabelInput = (langId: number) => `${this.formConfiguration} #configuration_CreateButtonLabel_${langId}`;
    this.wishlistPageNameInput = (langId: number) => `${this.formConfiguration} #configuration_WishlistPageName_${langId}`;
    this.formConfigurationBtn = `${this.formConfiguration} div.card-footer button`;
  }

  // Methods
  /**
   * @param page {Page}
   * @returns Promise<void>
   */
  async goToStatisticsTab(page: Page): Promise<void> {
    await this.clickAndWaitForURL(page, this.headTabNamed('Statistics'));
  }

  /**
   * @param page {Page}
   * @param name {'Configuration'|'Statistics'}
   * @returns Promise<boolean>
   */
  async isTabActive(page: Page, name: 'Configuration'|'Statistics'): Promise<boolean> {
    return this.elementVisible(page, `${this.headTabNamed(name)}.active.current`, 1000);
  }

  /**
   * Returns the value of the input
   * @param page {Page}
   * @param input {string}
   * @returns Promise<string>
   */
  async getInputValue(page: Page, input: string): Promise<string> {
    let inputSelector: string;

    switch (input) {
      case 'wishlistDefaultTitle':
        inputSelector = this.wishlistDefaultTitleInput(dataLanguages.english.id);
        break;
      case 'createButtonLabel':
        inputSelector = this.createButtonLabelInput(dataLanguages.english.id);
        break;
      case 'wishlistPageName':
        inputSelector = this.wishlistPageNameInput(dataLanguages.english.id);
        break;
      default:
        throw new Error(`Field ${input} was not found`);
    }

    return super.getInputValue(page, inputSelector);
  }

  /**
   * Returns the value of the input
   * @param page {Page}
   * @param input {string}
   * @returns Promise<string>
   */
  async setFormWording(
    page: Page,
    wishlistDefaultTitle: string|undefined = undefined,
    createButtonLabel: string|undefined = undefined,
    wishlistPageName: string|undefined = undefined,
  ): Promise<string> {
    if (typeof wishlistDefaultTitle === 'string') {
      await page.locator(this.wishlistDefaultTitleInput(dataLanguages.english.id)).fill(wishlistDefaultTitle);
    }
    if (typeof createButtonLabel === 'string') {
      await page.locator(this.createButtonLabelInput(dataLanguages.english.id)).fill(createButtonLabel);
    }
    if (typeof wishlistPageName === 'string') {
      await page.locator(this.wishlistPageNameInput(dataLanguages.english.id)).fill(wishlistPageName);
    }
    await page.locator(this.formConfigurationBtn).click();

    return this.getAlertBlockContent(page);
  }
}

module.exports = new Blockwishlist();
