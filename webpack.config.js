const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: path.resolve(__dirname, "./index.html"),
  filename: "./index.html"
 });

module.exports = {
  entry: './src/index.js',
  target: "electron-renderer",
  devtool: "source-map",
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [htmlPlugin],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
