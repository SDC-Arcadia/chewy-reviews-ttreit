const path = require('path');

const { merge } = require('webpack-merge');

const common = require('./webpack.common');

const DIST_DIR = path.join(__dirname, '/react-client/dist');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'reviews.prod-bundle.js',
    path: DIST_DIR,
  },
});
