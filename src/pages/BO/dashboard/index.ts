import semver from 'semver';

let Dashboard: any;
if (semver.gte(process.env.PS_VERSION as string, '8.0.0')) {
  Dashboard = require('@versions/8.0.0/pages/BO/dashboard');
} else {
  Dashboard = require('@versions/8.0.0/pages/BO/dashboard');
}
export default Dashboard;
