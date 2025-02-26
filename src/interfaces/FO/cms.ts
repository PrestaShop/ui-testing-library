import {FOBasePagePageInterface} from '@interfaces/FO';

export interface FoCmsPageInterface extends FOBasePagePageInterface {
  readonly pageContent: string;
  readonly pageNotFound: string;
  readonly pageTitle: string;
}
