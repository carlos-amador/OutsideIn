var webpack = require('webpack');
var path = require('path');
var nodeExternals = require('webpack-node-externals');
var helpers = require('./helpers');


module.exports = {


  entry: {
    'app': './app/api.ts'
  },

  target: 'node',

  devtool: "inline-cheap-module-source-map",

  externals: [nodeExternals()],


  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.js' ]
  },

  module: {
      loaders: [{
         test: /\.ts$/,
         include: helpers.root('app'),
         loader: 'ts-loader'
      }]
   },




};
