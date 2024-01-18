import semver from 'semver';

const psVersion = process.env.PS_VERSION ?? '99.99.99';

let Dashboard: any;
if (semver.gte(psVersion, '8.0.0')) {
  Dashboard = require('@versions/8.0.0/pages/BO/dashboard');
} else {
  Dashboard = require('@versions/8.0.0/pages/BO/dashboard');
}
export default Dashboard.constructor();
