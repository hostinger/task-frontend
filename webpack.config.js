const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: ['./src/index.js', './src/img/background.jpg'],
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [

            {

                test: /\.(sa|sc|c)ss$/,
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    "file-loader",
                    "image-webpack-loader"
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "fonts/"
                        }
                    }
                ]
            },
            {
                test: /\.htm?l$/,
                use: ['html-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ]

};
