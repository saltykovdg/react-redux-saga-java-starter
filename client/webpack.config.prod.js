const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: [
      'babel-polyfill',
      './src/index.js'
    ]
  },
  output: {
    path: './build',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components|build)/,
        loader: 'babel'
      }, {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        'API_URL': JSON.stringify('http://localhost:8080')
      }
    }),
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      mangle: false,
      output: { comments: false },
      compressor: {
        warnings: false
      }
    }),
  ]
};
