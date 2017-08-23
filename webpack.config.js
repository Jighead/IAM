const path = require('path');
module.exports = {
    entry: "./src/js/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "build.js",
        publicPath: "/dist"
    },

    module: {

        rules: [       
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "jshint-loader",
                enforce: 'pre'
            },
            { 
                test: /\.scss$/, 
                loader: "style-loader!css-loader!sass-loader"
            },
            { 
                test: /\.js$/, 
                loader: "babel-loader",
                exclude: /node_modules$/,
                query:{
                    presets: ['es2015']
                }
            },
        ]
    },
    devServer: {
        port:3010,
        inline: true,
    }

};