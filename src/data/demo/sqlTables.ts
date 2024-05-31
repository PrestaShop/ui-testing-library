import FakerSqlTable from '@data/faker/sqlTable';

export default {
  ps_access: new FakerSqlTable({
    name: 'ps_access',
    columns: [
      'id_profile',
      'id_authorization_role',
    ],
  }),
  ps_alias: new FakerSqlTable({
    name: 'ps_alias',
    columns: [
      'id_alias',
      'alias',
      'search',
      'active',
    ],
  }),
};
