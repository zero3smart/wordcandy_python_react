var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    module: {
        loaders: [{
                loader: "babel-loader",
                include: [
                    path.resolve(__dirname, "static/src"),
                ],
                test: /\.jsx?$/,
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'stage-0', 'react'],
                },
            },
            {
                test: /bootstrap-sass\/assets\/javascripts\//,
                loader: 'imports?jQuery=jquery'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            }, {
                test: /\.scss$/,
                loader: 'style-loader!css!sass'
            }, {
                test: /.woff2?(\?v=\d+.\d+.\d+)?$/,
                loader: "url?limit=10000&minetype=application/font-woff"
            }, {
                test: /\.(woff|woff2)?(\?v=\d+.\d+.\d+)?$/,
                loader: 'url-loader?limit=10000&minetype=application/font-wof'
            }, {
                test: /\.(png|jpg|eot|ttf|svg|gif)$/,
                loader: 'file-loader'
            }
        ]
    },
    output: {
        path: path.resolve('./static/bundles/'),
        filename: "bundle.js",
    },
    plugins: [
        new ExtractTextPlugin('bundle.css'),
        new BundleTracker({ filename: './webpack-stats.json' }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jquery: "jquery",
            "window.jQuery": "jquery",
            jQuery: "jquery",
            slick: "slick"
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    ],
    watch: true,
    devServer: {
        host: '0.0.0.0',
        inline: true,
        port: 8080
    },
    entry: [
        'babel-polyfill',
        'bootstrap-loader',
        './static/src/router.js',
        'bootstrap-sass!./static/config/bootstrap-sass.config.js'
    ]
};