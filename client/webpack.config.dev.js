const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    main: [
      'react-hot-loader/patch',
      'babel-polyfill',
      'webpack-dev-server/client?http://localhost:8090',
      'webpack/hot/only-dev-server',
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
        loaders: ["style", "css?sourceMap", "sass?sourceMap"]
      }
    ]
  },
  devServer: {
    port: 8090,
    historyApiFallback: true,
    inline: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
        'API_URL': JSON.stringify('http://localhost:8080')
      }
    }),
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
