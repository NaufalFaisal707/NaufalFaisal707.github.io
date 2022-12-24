const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'src/js/[hash].js',
        clean: true
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            // anime: 'animejs'
        }),
        new HtmlWebpackPlugin({
            template: './src/html/template.html',
            favicon: './src/html/favicon.ico'
        })
    ],
    module: {
        rules: [

            // css management
            {test: /\.css$/i, use: ['style-loader', 'css-loader']}
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'src'),
        },
        // compress: true,
        port: 9000,
        liveReload: true
    },
}