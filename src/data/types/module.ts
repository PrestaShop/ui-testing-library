type FakerModuleCreator = {
  tag?: string
  name?: string
  versionCurrent?: string
  versionOld?: string
  releaseZip?: string
}

type ModuleApiInfo = {
  moduleId: number
  technicalName: string
  moduleVersion: string
  installedVersion: string|null
  enabled: boolean
  installed: boolean
}

type ModuleInfo = {
  moduleId: number
  technicalName: string
  version: string
  enabled: boolean
  installed: boolean
}

export type {
  FakerModuleCreator,
  ModuleApiInfo,
  ModuleInfo,
};
