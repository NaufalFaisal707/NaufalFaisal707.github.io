const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: {
        app: './src/app.js',
        bootstrap: './node_modules/bootstrap/dist/js/bootstrap.js',
    },
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'src/js/[name].[hash].js',
        clean: true
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
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
        }),
        new MiniCssExtractPlugin({
            filename: 'src/css/[name].[hash].css'
        }),
    ],
    module: {
        rules: [

            // css management
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },

            // convert ES6 to ES5
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            
            // image management
            {
                test: /\.(png|jpe?g)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'src/img/[hash][ext][query]'
                }
            },

            // font maangement
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'src/fonts/[name]-[hash][ext][query]'
                }
            },
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
    devtool: false
}