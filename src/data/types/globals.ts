type GlobalInstall = {
  URL: string
  ENABLE_SSL: boolean
  LANGUAGE: string
  COUNTRY: string
  DB_SERVER: string
  DB_NAME: string
  DB_USER: string
  DB_PASSWD: string
  DB_PREFIX: string
  SHOP_NAME: string
}

type GlobalFO = {
  URL: string
}

type GlobalBO = {
  URL: string
  EMAIL: string
  PASSWD: string
  FIRSTNAME: string
  LASTNAME: string
}

type GlobalBrowserConfig = {
  headless: any
  timeout: number
  slowMo: number
  channel?: string
  args?: Array<string>
}

type GlobalBrowser = {
  name: string
  lang: string
  width: number
  height: number
  sandboxArgs: Array<string>
  acceptDownloads: boolean
  config: GlobalBrowserConfig
  captureErrors: boolean
}

type GlobalPSConfig = {
  parametersFile: string
}

type GlobalBrowserErrorConsole = {
  url: string
  error: string
}

type GlobalBrowserErrorJs = {
  url: string
  error: string
}

type GlobalBrowserErrorResponse = {
  url: string
  requestUrl: string
  status: string
}

type GlobalBrowserErrors = {
  responses: Array<GlobalBrowserErrorResponse>
  js: Array<GlobalBrowserErrorJs>
  console: Array<GlobalBrowserErrorConsole>
}

type GlobalScreenshot = {
  FOLDER: string
  AFTER_FAIL: any
}

type GlobalMaildevConfig = {
  smtpPort: number
  smtpServer: string
  silent: boolean
}

type GlobalKeycloakConfig = {
  keycloakExternalUrl: string
  keycloakInternalUrl: string
  keycloakAdminUser: string
  keycloakAdminPass: string
  keycloakClientId: string
}

export type {
  GlobalInstall,
  GlobalFO,
  GlobalBO,
  GlobalBrowser,
  GlobalBrowserConfig,
  GlobalPSConfig,
  GlobalBrowserErrorConsole,
  GlobalBrowserErrorJs,
  GlobalBrowserErrorResponse,
  GlobalBrowserErrors,
  GlobalScreenshot,
  GlobalMaildevConfig,
  GlobalKeycloakConfig,
};
