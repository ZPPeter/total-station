var webpack = require("webpack");
var CleanPlugin = require("clean-webpack-plugin");


module.exports = {
    // avoid webpack trying to shim process
    noParse: /es6-promise\.js$/,
    entry: "./src/app.js",
    output: {
        path: './dist',
        filename: "build.js",
        chunkFilename: '[name]-[chunkhash].js',
        publicPath: __dirname
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: "vue"
        }, {
            test: /\.jsx?$/,
            exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
            loader: "babel"
        }, {
            test: /\.(png|jpe?g|gif)$/,
            loader: "url-loader"
        }, {
            test: /\.css/,
            loader: "style!css"
        }, {
            test: /\.json/,
            loader: "json"
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            filename: "commons.js",
            children: true,
            minChunks: 2
        }),
        new CleanPlugin("./dist")
    ],
    babel: {
        presets: ["es2015"],
        plugins: ["transform-runtime"]
    },
    url: {
        limit: 8192
    }
};



if (process.env.NODE_ENV === 'production') {
    module.exports.plugins = [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ];
} else {
    module.exports.devtool = '#source-map';
}