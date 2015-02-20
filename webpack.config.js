var webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/js/main.js'
  },
  output: {
    path: __dirname + '/dist',
    publicPath: 'dist/',
    filename: 'main.js'
  },
  module: {
    loaders: [{
      test: /.+js$/,
      loader: 'babel-loader'
    }, {
      test: /.scss$/,
      loader: 'style!css!sass'
    }, {
      test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "url-loader?limit=10000&minetype=application/font-woff"
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "file-loader"
    }]
  }
};
