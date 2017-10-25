var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {


  entry: {
    'polyfills': './app/polyfills.ts',
    'vendor': './app/vendor.ts',
    'web': './app/web.ts'
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
          test: /jquery\.js$/,
          loader: 'expose-loader?jQuery'
      },
      {
          test: /\.(png|jpe?g|gif|svg|ico)$/,
          loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
          test: /\.(WOFF|EOT|TTF|SVG)$/,
          loader: "url-loader",
          options:{
              mimetype: "application/font-WOFF",
              limit: "50000",
              name: "/fonts/[name].[hash].[ext]"
          }
      },
      {
          test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url-loader?limit=10000&minetype=application/font-woff"
      },
      {
          test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url-loader?limit=10000&minetype=application/font-woff"
      },
      {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url-loader?limit=10000&minetype=application/octet-stream"
      },
      {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          loader: "file-loader"
      },
      {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          loader: "url-loader?limit=10000&minetype=image/svg+xml"
      },
      {
        test: /\.css$/,
        exclude: helpers.root('app', '_app'),
        loader:['css-to-string-loader'].concat( ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap' }))
      },
      {
        test: /\.css$/,
        include: helpers.root('app', '_app'),
        loader: 'raw-loader'
      }
    ]
  },

  plugins: [

    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      helpers.root('./app'), // location of your src
      {} // a map of your routes
    ),

    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]


};
