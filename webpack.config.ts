import path from 'path'
import { type Configuration } from 'webpack'
import { buildWebpackConfiguration } from './config/build/buildWebpackConfig'
import { type BuildEnv, type BuildPaths } from './config/build/types/config'

export default (env: BuildEnv): Configuration => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  }

  const mode = env.mode || 'development'
  const PORT = env.port || 3000
  const apiURL = env.apiURL || 'http://localhost:8000'

  const isDev = mode === 'development'

  const config: Configuration = buildWebpackConfiguration({
    mode,
    paths,
    isDev,
    port: PORT,
    apiURL,
    project: 'frontend'
  })

  return config
}
