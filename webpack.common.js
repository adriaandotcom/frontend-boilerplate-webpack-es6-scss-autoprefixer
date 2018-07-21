const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      inject: false,
      hash: false,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[contenthash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use:  [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  }
};
