import fs from 'fs';
import dataModules from '@data/demo/modules';

function getComposerLockVersion(moduleName: string): null|string {
  const rawData: string = fs.readFileSync('../prestashop/composer.lock', 'utf8');
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
  if (module.releaseZip) {
    const version = getComposerLockVersion(module.tag);

    if (version) {
      const urlModule = `https://github.com/PrestaShop/${module.tag}/releases/download/${version}/${module.tag}.zip`;

      if (urlModule !== module.releaseZip) {
        console.log(`Bump module ${module.tag} to ${version}`);
        const rawData: string = fs.readFileSync('src/data/demo/modules.ts', 'utf8');
        fs.writeFileSync('src/data/demo/modules.ts', rawData.replace(module.releaseZip, urlModule));
      }
    }
  }
}
