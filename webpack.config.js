'use strict';

let ExtractTextPlugin = require("extract-text-webpack-plugin");
const vendor = ['angular',
  'angular-resource',
  'angular-animate',
  'angular-sanitize',
  'angular-ui-router',
  './app/lib/ionic/js/ionic.js',
  './app/lib/ionic/js/ionic-angular.js'
];

module.exports = {
  entry: {
    vendor,
    build: "./app/app"
  },
  output: {
    path: __dirname + '/www/build',
    filename: "[name].js",
    chunkFilename: "[id].js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.html$/,
        loader: 'html',
        query: {
          minimize: true
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
      },
      {
        test: /\.(png|jpg|jpeg|svg|ttf|eot|woff|woff2)$/,
        loader: "file?name=assets/[name].[ext]"
      }
    ],
    noParse: /angular.js/
  },
  watch: true,
  plugins: [
    new ExtractTextPlugin("[name].css")
  ]
};
