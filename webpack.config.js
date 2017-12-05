var path = require('path');

module.exports = {
    entry: './entry.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
    },
    devtool: 'source-map',
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
    }
};