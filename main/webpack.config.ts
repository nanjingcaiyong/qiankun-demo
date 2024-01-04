import path from 'node:path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { VueLoaderPlugin } from 'vue-loader'
import type {  Configuration  } from 'webpack'
import type { Configuration as DevServerConfig } from 'webpack-dev-server'

const config: Configuration & DevServerConfig = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/' // ./是当前目录，/是根目录
  },
  resolve: {
    extensions: ['.js', '.vue', '.ts', '.tsx'],
    alias: {
      '@': '/src',
    }
  },
  devServer: {
    port: 8080,
    historyApiFallback: true
  },
  module: {
    rules: [{
      test: /\.vue$/,
      use: 'vue-loader'
    },
    {
      test: /\.(t|j)sx?$/,
      use: [{
        loader: 'babel-loader'
      }]
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader'
      ]
    }]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}

export default config