var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var stylusLoader = ExtractTextPlugin.extract("style-loader", "css-loader!stylus-loader");

module.exports = {
    entry: "./index.js",
    output: {
        path: "./dist",
        filename: "[name].js"
    },
    module: {
        loaders: [{
            test: /\.styl$/,
            loader: stylusLoader
        }]
    },
    plugins: [
        new ExtractTextPlugin("[name].css")
    ]
};