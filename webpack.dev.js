import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import path from 'node:path';

const dirname = import.meta.dirname;

/** @type {import('webpack').Configuration} */
export default {
  extends: path.resolve(dirname, './webpack.common.js'),
  mode: 'development',

  output: {
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
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
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [new ReactRefreshPlugin()],
  devServer: {
    port: 3000,
    static: './dist',
    hot: true,
    historyApiFallback: true,
  },
};
