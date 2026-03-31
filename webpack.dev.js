import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { mergeWithRules } from 'webpack-merge';

import commonConfig, { mergeConfig } from './webpack.common.js';

/** @type {import('webpack').Configuration} */
export default mergeWithRules(mergeConfig)(commonConfig, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: {
          fullySpecified: false,
        },
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: ['react-refresh/babel'],
            },
          },
        ],
      },
      {
        test: /\.css/,
        use: ['style-loader'],
      },
    ],
  },
  devServer: {
    port: 3000,
    static: './dist',
    hot: true,
    historyApiFallback: true,
  },
  plugins: [new ReactRefreshPlugin()],
});
