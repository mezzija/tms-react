const path = require('path');
const webpack = require('webpack');

const merge=require('webpack-merge');

const common=require('./webpack.common');

module.exports = merge.smart(common,{
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        publicPath: "/",
    },
    watch: true,
    devServer: {
        port: 8000,
        hot:true,
        open:true,
        historyApiFallback:true,
        proxy: {
            '/api': 'http://localhost:3000',
        },
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
    ],


});
