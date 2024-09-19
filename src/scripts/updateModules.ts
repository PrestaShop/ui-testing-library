import fs from 'fs';
import dataModules from '@data/demo/modules';

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

    if (version && version !== module.versionCurrent) {
      console.log(`Bump module ${module.tag} to ${version}`);
      const rawData: string = fs.readFileSync('src/data/demo/modules.ts', 'utf8');
      fs.writeFileSync('src/data/demo/modules.ts', rawData.replace(module.versionCurrent, version));
      if (module.versionOld) {
        fs.writeFileSync('src/data/demo/modules.ts', rawData.replace(module.versionOld, module.versionCurrent));
      }
    }
  }
}
