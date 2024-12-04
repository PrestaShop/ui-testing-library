import dataLanguages from '@data/demo/languages';
import dataBOPages from '@data/demo/boPages';
import dataEmployeeRoles from '@data/demo/employeeRoles';
import FakerLanguage from '@data/faker/language';
import FakerEmployeeRole from '@data/faker/employeeRole';
import {type EmployeeCreator} from '@data/types/employee';

import {faker} from '@faker-js/faker';

const profileNames: string[] = Object.values(dataEmployeeRoles).map((profile: FakerEmployeeRole) => profile.name);
const languagesNames: string[] = Object.values(dataLanguages).map((lang: FakerLanguage) => lang.name);

/**
 * Create new employee to use on creation form on employee page on BO
 * @class
 */
export default class FakerEmployee {
  public readonly id: number;

  public firstName: string;

  public lastName: string;

  public email: string;

  public password: string;

  public defaultPage: string;

  public language: string;

  public readonly active: boolean;

  public readonly permissionProfile: string;

  public avatarFile: string|null;

  public enableGravatar: boolean;

  /**
   * Constructor for class EmployeeData
   * @param employeeToCreate {EmployeeCreator} Could be used to force the value of some members
   */
  constructor(employeeToCreate: EmployeeCreator = {}) {
    /** @type {number} Employee ID */
    this.id = employeeToCreate.id || 0;

    /** @type {string} Employee firstname */
    this.firstName = employeeToCreate.firstName || faker.person.firstName();

    /** @type {string} Employee lastname */
    this.lastName = employeeToCreate.lastName || faker.person.lastName().replace('\'', '');

    /** @type {string} Email of the employee */
    this.email = employeeToCreate.email || faker.internet.email(
      {
        firstName: this.firstName,
        lastName: this.lastName,
        provider: 'prestashop.com',
      },
    );

    /** @type {string} Password for the employee account */
    this.password = employeeToCreate.password || 'prestashop_demo';

    /** @type {string} Permission profile to set on the employee */
    this.permissionProfile = employeeToCreate.permissionProfile || faker.helpers.arrayElement(profileNames);

    /** @type {string} Default page where employee should access after login */
    if (employeeToCreate.defaultPage) {
      this.defaultPage = employeeToCreate.defaultPage;
    } else {
      switch (this.permissionProfile) {
        case 'SuperAdmin':
          this.defaultPage = faker.helpers.arrayElement(dataBOPages.SuperAdmin);
          break;
        case 'Logistician':
          this.defaultPage = faker.helpers.arrayElement(dataBOPages.Logistician);
          break;
        case 'Salesman':
          this.defaultPage = faker.helpers.arrayElement(dataBOPages.Salesman);
          break;
        case 'Translator':
          this.defaultPage = faker.helpers.arrayElement(dataBOPages.Translator);
          break;
        default:
          this.defaultPage = 'Products';
          break;
      }
    }

    /** @type {string} Default BO language for the employee */
    this.language = employeeToCreate.language
      || faker.helpers.arrayElement(languagesNames.slice(0, 2));

    /** @type {boolean} Status of the employee */
    this.active = employeeToCreate.active === undefined ? true : employeeToCreate.active;

    /** @type {string|null} Path of the avatar of the employee */
    this.avatarFile = employeeToCreate.avatarFile || null;

    /** @type {boolean} Enable Gravatar */
    this.enableGravatar = employeeToCreate.enableGravatar === undefined ? false : employeeToCreate.enableGravatar;
  }
}
