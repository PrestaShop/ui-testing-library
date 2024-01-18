import semver from 'semver';

let Login: any ;
if (semver.gte(process.env.PS_VERSION as string, '8.0.0')) {
  Login = require('@versions/8.0.0/pages/BO/login');
} else {
  Login = require('@versions/8.0.0/pages/BO/login');
}
export default Login;
