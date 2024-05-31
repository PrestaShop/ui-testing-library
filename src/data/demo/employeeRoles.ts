import FakerEmployeeRole from '@data/faker/employeeRole';

export default [
  new FakerEmployeeRole({
    name: 'SuperAdmin',
  }),
  new FakerEmployeeRole({
    name: 'Logistician',
  }),
  new FakerEmployeeRole({
    name: 'Translator',
  }),
  new FakerEmployeeRole({
    name: 'Salesman',
  }),
];
