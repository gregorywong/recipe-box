const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');

var isProd = process.env.NODE_ENV === 'production';
var cssDev = ['style-loader', 'css-loader', 'sass-loader'];
var cssProd = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: ['css-loader', 'sass-loader']
});
var cssConfig = isProd ? cssProd : cssDev;

module.exports = {
  entry: {
    app: './src/index.jsx',
    bootstrap: 'bootstrap-loader'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: cssConfig
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  devServer: {
    contentBase: __dirname + '/dist',
    compress: true,
    port: 9000,
    stats: 'errors-only',
    open: true,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Recipe Box',
      /*
      minify: {
          collapseWhitespace: true
      },
      hash: true,
      */
      template: './src/index.ejs', // Load a custom template (ejs by default see the FAQ for details)
    }),
    new ExtractTextPlugin({
      filename: "./css/[name].css",
      disable: !isProd,
      allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      Popper: ['popper.js', 'default'],
      Tether: "tether",
      "window.Tether": "tether",
      Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
      Button: "exports-loader?Button!bootstrap/js/dist/button",
      Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
      Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
      Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
      Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
      Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
      Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
      Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
      Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
      Util: "exports-loader?Util!bootstrap/js/dist/util",
    })
  ]
}