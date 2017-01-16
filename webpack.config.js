let ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    vendor: "./app/vendor",
    build: "./app/build"
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
