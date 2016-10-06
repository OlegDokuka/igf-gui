var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var assetsPath = path.resolve(__dirname, '../static/dist');
var TsConfigPathsPlugin = require('awesome-typescript-loader').TsConfigPathsPlugin;


module.exports = {
    target: 'electron',
    entry: './src/app/index.ts',
    output: {
        path: assetsPath,
        filename: 'app.bundle.js',
        sourceMapFilename: 'app.bundle.map'
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loaders: ['awesome-typescript-loader', 'tslint'] },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.html$/, exclude: /node_modules/, loader: 'html-loader' },
            { test: /\.json$/, loader: 'json-loader' }
        ]
    },
    devtool: 'source-map',
    progress: true,
    resolve: {
        modulesDirectories: [
            'src',
            'node_modules',
            'bower_components'
        ],
        extensions: ['', '.ts', '.tsx', '.js'],
        plugins: [
            new TsConfigPathsPlugin(/* { tsconfig, compiler } */)
        ]
    },
    tslint: {
        emitErrors: false,
        failOnHint: false,
        fileOutput: {
            dir: path.resolve(assetsPath, "..", "lint"),
            ext: "xml",
            clean: true,
            header: "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<checkstyle version=\"5.7\">",
            footer: "</checkstyle>"
        }
    },
}