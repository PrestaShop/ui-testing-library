import type { LoginPageInterface } from '@interfaces/BO/login';
import semver from 'semver';

const psVersion = process.env.PS_VERSION ?? '99.99.99';

let Login: LoginPageInterface;
if (semver.gte(psVersion, '8.0.0')) {
  Login = require('@versions/8.0.0/pages/BO/login');
} else {
  Login = require('@versions/8.0.0/pages/BO/login');
}
export default Login;
