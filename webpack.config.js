const path = require('path');
const json = require('json-loader!./file.json');
const webpack = require('webpack');

module.exports = {
    entry: './src/client/index.js',
    devtool: 'source-map',
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    cache: true,
                    emitWarning: true,
                    fix: true
                  }
              },
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
};
