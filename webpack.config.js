const path = require('path');

module.exports = {
  mode: 'development',
  target: 'es5',
  entry: [ 'core-js/stable', './src/index.js' ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    chunkFormat: 'array-push'
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};