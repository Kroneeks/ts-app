import { type WebpackPluginInstance, ProgressPlugin, DefinePlugin, HotModuleReplacementPlugin } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { type buildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CopyPlugin from "copy-webpack-plugin"

export function buildPlugins ({ paths, isDev, apiURL, project }: buildOptions): WebpackPluginInstance[] {
  const plugins = [
    new HtmlWebpackPlugin({ template: paths.html }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiURL),
      __PROJECT__: JSON.stringify(project)
    }),
    new CopyPlugin({
      patterns: [
        { from: paths.locales, to: paths.buildLocales }
      ],
    }),
  ];

  if (isDev) {
    plugins.push(
      new ReactRefreshWebpackPlugin()
    )
    plugins.push(
      new HotModuleReplacementPlugin(),
    )
    plugins.push(new BundleAnalyzerPlugin({
      openAnalyzer: false
    }))
  }

  return plugins;
}
