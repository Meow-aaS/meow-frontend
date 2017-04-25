var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    publicPath: "src/client/public/",
    filename: 'bundle.js',
  },
  devServer: {
    historyApiFallback: {
      index: 'index.html'
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['react']
        }
      },

      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader?name=assets/images/[name].[ext]"

      },
      {
        test: /\.css$/,
        loader: 'style-loader'
      }, {
        test: /\.css$/,
        loader: 'css-loader',
        // query: {
        //   modules: true,
        //   localIdentName: '[name]__[local]___[hash:base64:5]'
        // }
      }


    ],
  }
};

module.exports = config;