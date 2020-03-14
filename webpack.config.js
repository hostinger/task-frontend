const HtmlWebPackPlugin = require("html-webpack-plugin");
const { resolve } = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
      {
        test:/\.(s*)css$/,
        use:['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|svg|jpeg)$/,
        loader: 'url-loader'
      },
      {
        test: /\.(ttf|woff|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader'
      }
    ]
  },
  performance: {
    hints: false
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: resolve(__dirname, 'src/public', 'index.html'),
      filename: "./index.html",
    })
  ]
};
