import fs from 'fs';
import dataModules from '@data/demo/modules';
import semver from 'semver';

function getComposerLockVersion(moduleName: string): null|string {
  const rawData: string = fs.readFileSync('./prestashop/composer.lock', 'utf8');
  const jsonData = JSON.parse(rawData);

  // eslint-disable-next-line no-restricted-syntax
  for (const module of jsonData.packages) {
    if (module.name === `prestashop/${moduleName}`) {
      return module.version;
    }
  }

  return null;
}

// eslint-disable-next-line no-restricted-syntax
for (const module of Object.values(dataModules)) {
  if (module.versionCurrent) {
    const version = getComposerLockVersion(module.tag);

    if (version && semver.gt(version, module.versionCurrent)) {
      console.log(`Bump module ${module.tag} to ${version} (before: ${module.versionCurrent})`);

      const rawData: string = fs.readFileSync('src/data/demo/modules.ts', 'utf8');
      let newData: string = rawData.replace(
        `versionCurrent: '${module.versionCurrent}'`,
        `versionCurrent: '${version}'`,
      );

      if (module.versionOld) {
        newData = newData.replace(
          `versionOld: '${module.versionOld}'`,
          `versionOld: '${module.versionCurrent}'`,
        );
      }

      fs.writeFileSync('src/data/demo/modules.ts', newData);
    }
  }
}
