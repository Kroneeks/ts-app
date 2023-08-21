import path from 'path';
import { Configuration } from 'webpack';
import { buildOptions } from "./types/config";
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfiguration(options: buildOptions) : Configuration {
    const {mode, paths, isDev} = options;

    return {
        entry: paths.entry,
        mode,
        module: {
          rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        output: {
          filename: '[name].[contenthash].js',
          path: paths.build,
          clean: true,
        },
        plugins: buildPlugins(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
      }
}