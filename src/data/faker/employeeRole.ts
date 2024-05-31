import type EmployeeRoleCreator from '@data/types/employeeRole';

import {faker} from '@faker-js/faker';

/**
 * Create new role to use on creation form on role page on BO
 * @class
 */
export default class FakerEmployeeRole {
  public readonly name: string;

  /**
   * Constructor for class FakerEmployeeRole
   * @param roleToCreate {EmployeeRoleCreator} Could be used to force the value of some members
   */
  constructor(roleToCreate: EmployeeRoleCreator = {}) {
    /** @type {string} Name of the profile */
    this.name = roleToCreate.name || faker.person.jobType();
  }
}
