import semver from 'semver';

let file: string;

if (semver.gte(process.env.PS_VERSION as string, '8.0.0')) {
  file = '@versions/8.0.0/pages/BO/login';
} else {
  file = '@versions/8.0.0/pages/BO/login';
}

const Login = await import(file);
export default Login;
