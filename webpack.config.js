const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');



module.exports = {
    mode: 'development',
    entry:
    {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true,
        assetModuleFilename: '[name][ext]',
    },
    devtool: 'source-map',
    devServer: {
        static:
        {
            directory: path.resolve(__dirname, 'dist')
        },
        headers: {
            "Cross-Origin-Opener-Policy": "same-origin",
            "Cross-Origin-Embedder-Policy": "require-corp"
        },
        port: 8081,
        open: true,
        hot: true,
        compress: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.(png|jpg|jpeg)$/i,
                type: 'asset/resource'
            },
        ],
    },
    plugins: [
        new htmlWebpackPlugin(
            {
                filename: "index.html",
                template: 'src/templates/index.html',
            }
        ),
        new CopyWebpackPlugin({
            patterns: [
                { from: "src/assets/blockly_media", to: "media" } // Adjust source and destination paths as needed
            ]
        }),
    ]
};

