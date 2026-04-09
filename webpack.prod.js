import Dotenv from 'dotenv-webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { mergeWithRules } from 'webpack-merge';

import commonConfig, { mergeConfig } from './webpack.common.js';

/** @type {import('webpack').Configuration} */
export default mergeWithRules(mergeConfig)(commonConfig, {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/[name].[contenthash][ext]',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: {
          fullySpecified: false,
        },
        use: ['babel-loader'],
      },
      {
        test: /\.css/,
        use: [MiniCssExtractPlugin.loader],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
    new Dotenv({ systemvars: true }),
  ],
});
