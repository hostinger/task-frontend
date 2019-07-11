const path = require('path')
const webpack = require('webpack')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? ''
    : '/',
  configureWebpack: {
    resolve: {
      extensions: ['.js'],
      alias: {
        'jquery': 'jquery/dist/jquery.slim.js',
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery',
        jQuery: 'jquery',
        Popper: ['popper.js', 'default'],
        'Util': "exports-loader?Util!bootstrap/js/dist/util"
      }),
      // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ]
  }
}