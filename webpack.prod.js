import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'node:path';

const dirname = import.meta.dirname;

/** @type {import('webpack').Configuration} */
export default {
  extends: path.resolve(dirname, './webpack.common.js'),
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
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' })],
};
