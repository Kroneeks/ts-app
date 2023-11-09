export type buildMode = 'development' | 'production'

export interface BuildPaths {
  entry: string
  build: string
  html: string
  src: string
}

export interface BuildEnv {
  mode: buildMode
  port: number
  apiURL: string
}

export interface buildOptions {
  mode: buildMode
  paths: BuildPaths
  isDev: boolean
  port: number,
  apiURL: string,
  project: 'storybook' | 'frontend' | 'jest'
}
