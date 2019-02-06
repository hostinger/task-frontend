const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: "style-loader" // creates style nodes from JS strings
            },
            {
              loader: "css-loader" // translates CSS into CommonJS
            },
            {
              loader: "sass-loader" // compiles Sass to CSS
            }
          ]
        }
        // {
        //   test: /\.(gif|png|jpe?g|svg)$/i,
        //   use: [
        //     'file-loader',
        //     {
        //       loader: 'image-webpack-loader',
        //       options: {
        //         bypassOnDebug: true, // webpack@1.x
        //         disable: true, // webpack@2.x and newer
        //       },
        //     },
        //   ]
        // }
        // {
        //   test: /\.(jpe?g|png|gif|svg)$/i,
        //   use: [
        //     'url-loader?limit=10000',
        //     'img-loader'
        //   ]
        // }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
    })
  ]
};