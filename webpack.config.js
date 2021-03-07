

const path = require('path');

module.exports = {
  entry: './test-webpack/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
 mode: 'production',
 optimization: {
   usedExports: false,
 },
};