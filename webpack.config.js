const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: resolve(__dirname, 'src', 'index.js'),
  mode: "development",
  output: {
    filename: "main.[contenthash].js",
    path: resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'img-optimize-loader?name=../build/images/[contenthash].[ext]',
            options: {
              compress: {
                mode: 'high',
                webp: true,
                gifsicle: true,
                disableOnDevelopment: false
              }
            }
          }
      ]
      },
      {
        test: /\.mp3$/i,
        use: [
            {
              loader: 'file-loader?name=../build/audio/[contenthash].[ext]'
            }
        ]
      },
      {
        test: /\.(webm|mp4)$/i,
        use: [
            {
                loader: 'file-loader?name=../build/video/[contenthash].[ext]'
            }
        ]
    },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: resolve(__dirname, 'src', "index.html") }),
  ],
  devServer: {
    port: 9090,
    watchFiles: ["../*"],
    open: true,
    hot: true,
  },
};
