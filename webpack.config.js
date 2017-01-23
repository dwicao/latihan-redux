const path = require('path')
const webpack = require('webpack')
const validator = require('webpack-validator')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = validator({
    entry: path.join(__dirname, 'src', 'main.js'),

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },

    devServer: {
        inline: true,
        port: 5000
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            'React': 'react',
            'ReactDOM': 'react-dom'
        }),

        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            filename: 'index.html',
            inject: 'body'
        })
    ]
})
