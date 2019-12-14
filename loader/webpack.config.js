const webpack = require('webpack');
const path = require('path');

const PORT = 4200;

module.exports = {
  entry: [
  ],
  output: {
    path: process.cwd() + '/build',
    filename: '[name].js',
    publicPath: '/build/',
  },
  devtool: 'inline-source-map',
  devServer: {
    port: PORT,
    publicPath: '/build/',
    contentBase: './',
    historyApiFallback: true,
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, './'),
    ],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.html$/,
        exclude: /node_modules|svelte/,
        loader: 'html-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: getBabelConfig(),
      }
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks: module => module.context && module.context.indexOf('node_modules') !== -1
    }),
  ],
};

function getBabelConfig() {
  return {
    presets: [
      ['babel-preset-env', {
        targets: {
          'browsers': ['last 2 versions'],
        },
      }],
    ],
    plugins: [
      'transform-object-rest-spread',
      'transform-class-properties',
      'syntax-dynamic-import',
      'transform-function-bind'
    ],
  };
}