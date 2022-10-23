const path = require('path');
const config = require('./webpack.config');
const { merge } = require('webpack-merge');

module.exports = merge(config, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'ready'),
        filename: 'script.[contenthash].js',
        clean: true
    },
});