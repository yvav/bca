module.exports = {
    entry: {
        vendor: "./vendor",
        build: "./build"
    },
    output: {
        path: __dirname + '/build',
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ],
        noParse: /angular.js/
    }
};