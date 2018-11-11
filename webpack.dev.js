const path = require('path');
const fs = require('fs');

const { DefinePlugin } = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const webpackCommonConfig = require('./webpack.common');

const keyPath = path.join(__dirname, 'keys', 'localhost-key.pem');
const certPath = path.join(__dirname, 'keys', 'localhost.pem');

const webpackDevConfig = merge(webpackCommonConfig, {
  mode: 'development',
  devtool: 'eval-source-map',

  entry: {
    main: './src/index.tsx',
  },

  output: {
    filename: 'static/js/bundle.js',
    chunkFilename: 'static/js/[name].chunk.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'thread-loader',
            options: {
              poolTimeout: Infinity,
            },
          },
          {
            loader: 'babel-loader',
            options: {
              babelrc: true,
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'public/index.html',
    }),
    new FriendlyErrorsWebpackPlugin(),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.ENABLE_ANALYTICS': false,
      'process.env.ENABLE_ERROR_TRACKING': false,
      'process.env.SENTRY_DSN': JSON.stringify(''),
    }),
  ],

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },

  devServer: {
    open: true,
    host: '0.0.0.0',
    port: process.env.PORT || 4000,
    hot: true,
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: '/',
    inline: true,
    https: {
      key: fs.readFileSync(keyPath),
      cert: fs.readFileSync(certPath),
    },
    overlay: {
      errors: true,
      warnings: false,
    },
    quiet: true,
    clientLogLevel: 'error',
    historyApiFallback: true,
  },
});

module.exports = webpackDevConfig;
