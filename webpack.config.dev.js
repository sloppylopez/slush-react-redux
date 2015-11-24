var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var ROOT_PATH = path.resolve(__dirname)

module.exports = {
    devtool: 'eval-source-map',
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.join(__dirname, 'app/index.jsx')
    ],
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: '[name].js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.tpl.html',
            title: 'React/Redux',
            inject: 'body',
            filename: 'index.html'
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            '__DEV__': JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ],
    module: {
        preLoaders: [{
            test: /\.jsx?$/,
            loader: 'eslint-loader',
            include: path.resolve(ROOT_PATH, 'app'),
            exclude: /node_modules/
        }],

        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            include: path.resolve(ROOT_PATH, 'app'),
            loader: 'babel'
        }, {
            test: /\.json?$/,
            loader: 'json'
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.(otf|png|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url?limit=8192'
        }, {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&mimetype=application/font-woff"
        },
            {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"}
        ]
    }
    //,
    //sassLoader: {
    //    includePaths: [path.resolve(__dirname, "./app/stylesheets")]
    //}
}
