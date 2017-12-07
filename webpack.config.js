const path = require('path');
const TransferWebpackPlugin = require('transfer-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/entry.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'build')
    },
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin(['build']),
        // Moves files
        new TransferWebpackPlugin([
            {from: 'www'},
        ], path.resolve(__dirname, 'src')),
    ],

    module: {
        rules: [
            // {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
    }
};