const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/game_logic.ts',
    mode: 'production',
    output: {
        filename: 'game_logic.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        library: 'Game'
    },
    devtool: 'inline-source-map',
    // Code from ts-loader documentation
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"],
        // Add support for TypeScripts fully qualified ESM imports.
        extensionAlias: {
            ".js": [".js", ".ts"],
            ".cjs": [".cjs", ".cts"],
            ".mjs": [".mjs", ".mts"]
        }
    },
    module: {
        rules: [
            // all files with a `.ts`, `.cts`, `.mts` or `.tsx` extension will be handled by `ts-loader`
            {
                test: /\.([cm]?ts|tsx)$/,
                loader: "ts-loader",
                include: [path.resolve(__dirname, 'src')]
            },
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {from: "*.css", context: "src/"},
                {from: "*.html", context: "src/"}
            ]
        }),
    ]
};