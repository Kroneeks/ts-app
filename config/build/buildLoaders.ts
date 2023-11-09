import { type RuleSetRule } from 'webpack'
import { type buildOptions } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoader'
import { buildBabelLoader } from './loaders/buildBabelLoader'

export function buildLoaders (options: buildOptions): RuleSetRule[] {
  const { isDev } = options;
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  const babelLoader = buildBabelLoader(options)

  const svgLoader = {
    test: /\.svg$/i,
    use: [{ loader: '@svgr/webpack' }]
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  }

  const cssLoader = buildCssLoader(isDev);

  return [
    fileLoader,
    svgLoader,
    babelLoader,
    typescriptLoader,
    cssLoader
  ]
}
