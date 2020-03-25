const path = require('path');
const merge=require('webpack-merge');

const common=require('./webpack.common');
module.exports =merge.smart(common,{
    mode: 'production',
    output: {
        filename: 'assets/js/bundle.[hash].js',
        publicPath: './',
        path: path.resolve(__dirname, '../dist')
    },


}) ;
