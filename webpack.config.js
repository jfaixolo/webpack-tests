const path = require('path');

module.exports = {
  mode: 'development',
  target: 'es5',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    chunkFormat: 'array-push'
  },
  devtool: false
};