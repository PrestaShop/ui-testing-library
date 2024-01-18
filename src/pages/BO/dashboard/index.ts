import type {DashboardPageInterface} from '@interfaces/BO/dashboard';
import semver from 'semver';

const psVersion = process.env.PS_VERSION ?? '0.0.0';

let dashboardPage: DashboardPageInterface;

/* eslint-disable global-require */
if (semver.gte(psVersion, '8.0.0')) {
  dashboardPage = require('@versions/8.0.0/pages/BO/dashboard');
} else {
  dashboardPage = require('@versions/8.0.0/pages/BO/dashboard');
}
/* eslint-enable global-require */
module.exports = dashboardPage;
