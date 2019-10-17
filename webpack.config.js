var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './app/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        })
    ]
}