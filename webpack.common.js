import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'node:path';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const dirname = import.meta.dirname;

/** @type {import('webpack').Configuration} */
export default {
  entry: './src/index.js',
  output: {
    path: path.resolve(dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        resolve: {
          fullySpecified: false,
        },
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|mp4)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@/*': path.resolve(dirname, 'src/*'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(dirname, 'index.html'),
    }),
    // new BundleAnalyzerPlugin(),
  ],
};
