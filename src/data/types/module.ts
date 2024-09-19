type FakerModuleCreator = {
  tag?: string
  name?: string
  versionCurrent?: string
  versionOld?: string
  releaseZip?: string
}

type ModuleInfo = {
  moduleId: number
  technicalName: string
  version: string
  enabled: boolean
}

export type {
  FakerModuleCreator,
  ModuleInfo,
};
