const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
module.exports = (mode) => ({
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env"]],
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "./public",
          filter: (resourcePath) => {
            return !resourcePath.endsWith("index.html");
          },
        },
      ],
    }),
  ],
  devServer: {
    port: 3000,
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
  },
  devtool: mode === "production" ? false : "inline-source-map",
});
