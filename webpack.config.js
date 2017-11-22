var path = require('path');

module.exports = {
    entry: './entry.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
    }
};