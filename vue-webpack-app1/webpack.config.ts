import type { Configuration } from 'webpack'
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { VueLoaderPlugin } from 'vue-loader'
import path from 'node:path'

const packageName = 'module-federation';

const devServer: DevServerConfiguration = {
  port: 8081,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
};

const config: Configuration = {
  mode: 'development',
  entry: {
    app: './src/main.ts'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: `[name]`,
    libraryTarget: 'umd', // 把微应用打包成 umd 库格式
    chunkLoadingGlobal: `webpackJsonp_[name]`, // webpack 5 需要把 jsonpFunction 替换成 chunkLoadingGlobal
  },
  devServer,
  module: {
    rules: [{
      test: /\.vue/,
      use: 'vue-loader'
    },     {
      test: /\.(t|j)sx?$/,
      use: [{
        loader: 'babel-loader'
      }]
    }]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}

export default config