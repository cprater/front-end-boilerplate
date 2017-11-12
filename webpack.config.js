const path = require('path');
const webpack = require('webpack');
const babelLoader = 'babel-loader?presets[]=es2015';
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const SRC_PATH = path.resolve(__dirname, './src');
const PUBLIC_PATH = path.resolve(__dirname, './public/assets');

module.exports = {
  'entry': [
    `${SRC_PATH}/scripts/index.js`,
    `${SRC_PATH}/styles/app.scss`
  ],
  'output': {
    'path': `${PUBLIC_PATH}`,
    'filename': 'bundle.js'
  },
  'module': {
    'loaders': [
      {
        'test': /\.js$/,
        'exclude': /node_modules/,
        'loader': babelLoader
      },
      {
        'test': /\.(sass|scss)$/,
        'loader': ExtractTextPlugin.extract(['css-loader', 'postcss-loader', 'sass-loader'])
      },
      {
        'test': /\.(svg)$/,
        'loader': 'file-loader'
      }
    ]
  },
  'plugins': [
    require('autoprefixer'),
    new ExtractTextPlugin({
      'filename': 'app.css',
      'allChunks': true
    })
  ],
  'resolve': {
    'alias': {
      'scripts': `${SRC_PATH}/scripts/`,
      'views': `${SRC_PATH}/scripts/views/`
    },
    'extensions': ['.js', '.scss', '.css', '.svg']
  }
};
