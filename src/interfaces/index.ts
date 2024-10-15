import type {PageWaitForSelectorOptionsState, WaitForNavigationWaitUntil} from '@data/types/playwright';
import type {
  BrowserContext, ElementHandle, Frame, JSHandle, Locator, Page, Response,
} from '@playwright/test';

export interface CommonPageInterface {
  changePage(browserContext: BrowserContext, tabId?: number): Promise<Page>;
  clearInput(page: Frame | Page, selector: string): Promise<void>;
  clickAndWaitForDownload(page: Page, selector: string, targetBlank?: boolean): Promise<string | null>;
  clickAndWaitForLoadState(page: Frame | Page, selector: string, state?: string, timeout?: number): Promise<void>;
  clickAndWaitForURL(page: Frame | Page, selector: string, waitUntil?: WaitForNavigationWaitUntil, timeout?: number)
    : Promise<void>
  closePage(browserContext: BrowserContext, page: Page, tabId?: number): Promise<Page>;
  dialogListener(page: Page, accept?: boolean, text?: string): Promise<void>;
  dragAndDrop(page: Page, source: string, target: string): Promise<void>;
  elementNotVisible(page: Frame | Page, selector: string, timeout?: number): Promise<boolean>;
  elementVisible(page: Frame | Page, selector: string, timeout?: number): Promise<boolean>;
  getAttributeContent(page: Frame | Page, selector: string, attribute: string): Promise<string>;
  getClipboardText(page: Page): Promise<string>;
  getCurrentURL(page: Page): Promise<string>;
  getInputValue(page: Page, selector: string): Promise<string>;
  getNumberFromText(page: Page | Frame, selector: string, timeout?: number): Promise<number>;
  getPageTitle(page: Page): Promise<string>;
  getParentElement(page: Frame | Page, selector: string)
    : Promise<ElementHandle<HTMLElement> | JSHandle<HTMLElement | null | undefined> | JSHandle<null>>;
  getPriceFromText(page: Frame|Page, selector: string, timeout?: number, waitForSelector?: boolean): Promise<number>;
  getTextContent(page: Page | Frame, selector: string, waitForSelector?: boolean, withTrim?: boolean): Promise<string>;
  goTo(page: Page, url: string): Promise<Response|null>;
  goToBO(page: Page): Promise<void>;
  goToFo(page: Page): Promise<void>;
  goToPreviousPage(page: Page, waitUntil?: WaitForNavigationWaitUntil): Promise<void>;
  isChecked(page: Frame | Page, selector: string): Promise<boolean>;
  isDisabled(page: Page, selector: string): Promise<boolean>;
  openLinkWithTargetBlank(
    page: Page,
    selector: string,
    newPageSelector?: string,
    state?:string,
    waitForVisible?: boolean,
  ): Promise<Page>;
  reloadPage(page: Page): Promise<void>;
  resize(page: Page, mobileSize: boolean): Promise<void>;
  scrollTo(page: Page, selector: string): Promise<void>;
  selectByValue(page: Frame | Page, selector: string, valueToSelect: number|string, force?: boolean): Promise<void>;
  selectByVisibleText(page: Frame | Page, selector: string, textValue: string | number, force?: boolean,): Promise<void>;
  setChecked(page: Frame | Page, checkboxSelector: string, valueWanted?: boolean, force?: boolean): Promise<void>;
  setCheckedWithIcon(page: Frame | Page, checkboxSelector: string, valueWanted?: boolean): Promise<void>;
  setHiddenCheckboxValue(page: Frame | Page, checkboxSelector: string, valueWanted?: boolean): Promise<void>;
  setInputValue(page: Page, selector: string, value: string): Promise<void>;
  setValue(page: Frame | Page, selector: string, value: string | number): Promise<void>;
  uploadFile(page: Page | Frame, selector: string, filePath: string): Promise<void>;
  uploadOnFileChooser(page: Page, selector: string, filePath: string[]): Promise<void>;
  waitForAttachedSelector(page: Page, selector: string, timeout?: number): Promise<void>;
  waitForHiddenSelector(page: Frame | Page, selector: string, timeout?: number): Promise<void>;
  waitForPageTitleToLoad(page: Page): Promise<void>;
  waitForSelector(page: Page | Frame, selector: string, state: PageWaitForSelectorOptionsState, timeout?: number)
    : Promise<void>;
  waitForSelectorAndClick(page: Frame | Page, selector: string, timeout?: number): Promise<void>
  waitForVisibleLocator(locator: Locator, timeout?: number): Promise<void>;
  waitForVisibleSelector(page: Page | Frame, selector: string, timeout?: number): Promise<void>;
}
