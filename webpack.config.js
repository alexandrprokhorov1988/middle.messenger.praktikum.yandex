const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const PugPlugin = require('pug-plugin');

module.exports = {
  mode: 'development',
  entry: ['./src/pages/index.ts', './src/styles/index.scss'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'messenger.bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', '.scss', 'pug', '.html'],
    fallback: {
      "path": false,
      "fs": false,
      "os": false
    },
    // alias: {
    //   'pug-loader': PugPlugin.loader,
    // }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, 'tsconfig.json'),
            },
          },
        ],
        exclude: /(node_modules)/
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource',
      },
      {
        test: /\.pug$/,
        // loader: "pug-loader",
        // loader: PugPlugin.loader,
        loader: '@webdiscus/pug-loader',
        options: {
          pretty: true
        }
        // options: {
        //   method: 'compile'
        // }
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    // new PugPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/pages/index.pug')
    }),
    new MiniCssExtractPlugin()
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    historyApiFallback: true,
    compress: true,
    port: 3000,
    open: true,
    hot: true,
  },
  stats: {
    errorDetails: true
  }
};
