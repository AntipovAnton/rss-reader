const path = require('path');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    target: 'web',
    entry: './src/index.tsx',
    mode: 'development',
    devtool: 'source-map',

    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.[fullhash].js',
        publicPath: "/"
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        plugins: [new TsconfigPathsPlugin()],
    },

    module: {
        rules: [
            {
                test: /\.(tsx|ts)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ]
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            },
            {
                test: /\.(gif|png|jpg|jpeg)$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, './src/assets/img/'),
                use: 'url-loader?limit=10000&name=assets/img/[name]-[hash].[ext]'
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new NodePolyfillPlugin(),
        new HtmlWebpackPlugin({
            template: './src/assets/index.html'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
            },
        }),
    ],
    devServer: {
        hot: true,
        port: 3000,
        open: true,
        historyApiFallback: true,
        allowedHosts: 'all'
    },
};
