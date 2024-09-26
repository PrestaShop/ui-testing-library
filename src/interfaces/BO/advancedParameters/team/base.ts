import {BOBasePagePageInterface} from '@interfaces/BO';

export interface BOTeamBasePageInterface extends BOBasePagePageInterface {
  readonly pageTitleEdit: (firstName: string, lastName: string) => string;
  readonly pageTitleEditFr: (firstName: string, lastName: string) => string;
}
