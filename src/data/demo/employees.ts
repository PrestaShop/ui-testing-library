import FakerEmployee from '@data/faker/employee';

export default {
  defaultEmployee: new FakerEmployee({
    id: 1,
    firstName: global.BO.FIRSTNAME,
    lastName: global.BO.LASTNAME,
    email: global.BO.EMAIL,
    password: global.BO.PASSWD,
    defaultPage: 'Dashboard',
    language: 'English (English)',
    active: true,
  }),
};
