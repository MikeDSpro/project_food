import Webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import config from '../../config';
import baseWebpackConfig from './webpack.base.babel';

const HotModuleReplacementPlugin = new Webpack.HotModuleReplacementPlugin();

const { host, port } = config;

export default {
  devtool: 'source-map',
  entry: [
    `webpack-dev-server/client?http://${host}:${port}`,
    'webpack/hot/dev-server',
    'babel-polyfill',
    path.join(__dirname, `../../src/index.js`),
  ],
  output: {
    path: path.join(__dirname, '../../public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    HotModuleReplacementPlugin,
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../../public/index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
  ],
  ...baseWebpackConfig,
};

