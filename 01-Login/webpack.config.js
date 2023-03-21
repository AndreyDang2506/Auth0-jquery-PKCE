const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/app.js",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    watch: true,
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: './index.html'
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, '.')
        },
        compress: true,
        port: 3000
    },
};