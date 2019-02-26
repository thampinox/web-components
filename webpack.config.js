const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './index.html'
        })
    ]
};