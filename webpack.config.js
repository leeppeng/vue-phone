const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const axios = require('axios')
const express = require('express')

const app = express()
var appData = require('./db.json') //加载本地数据文件user
// var getDataList = appData.getDataList.data //获取对应的本地数据
var getCaseList = appData.getCaseList //获取对应的本地数据
var CaseTabSort = appData.CaseTabSort //获取对应的本地数据
var getSiteList = appData.getSiteList //获取对应的本地数据

var apiRoutes = express.Router()
app.use('/api', apiRoutes) // 调用api

module.exports = env => {
  if (!env) {
    env = {}
  }
  let plugins = [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './client/views/index.html'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, './static'),
        to: './static',
        ignore: ['.*']
      }
    ])
  ]
  if (env.production) {
    plugins.push(
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: 'production'
        }
      }),
      new ExtractTextPlugin('[name].css'),
      new UglifyJsPlugin({
        sourceMap: true
      })
    )
  }
  return {
    mode: 'none',
    entry: ['./client/assets/js/viewport.js','./client/main.js'],
    devtool: 'source-map',
    devServer: {
      before(app) {
        app.get('/api/getCaseList', (req, res) => {
          res.json({
            errno: 0,
            data: getCaseList //数据
          })
        }),
        app.post('/api/CaseTabSort', (req, res) => {
          res.json({
            errno: 0,
            data: CaseTabSort //数据
          })
        }),
        app.post('/api/getSiteList', (req, res) => {
          res.json({
            errno: 0,
            data: getSiteList //数据
          })
        })
      },
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000,
      hot: true
    },
    module: {
      rules: [
        {
          test: /\.(vue|js|jsx)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/,
          enforce: 'pre' // 预处理
        },
        {
          test: /\.jsx$/,
          loader: 'babel-loader'
        },
        {
          test: /\.html$/,
          loader: 'html-loader'
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            cssModules: {
              localIdentName: '[path][name]---[local]---[hash:base64:5]',
              camelCase: true
            },
            loaders: env.production ? {
              css: ExtractTextPlugin.extract({use: 'css-loader?minimize!px2rem-loader?remUnit=40&remPrecision=8', fallback: 'vue-style-loader'}),
              scss: ExtractTextPlugin.extract({use: 'css-loader?minimize!px2rem-loader?remUnit=40&remPrecision=8!sass-loader', fallback: 'vue-style-loader'}) // <style lang="scss">
            } : {
              css: 'vue-style-loader!css-loader!px2rem-loader?remUnit=40&remPrecision=8',
              scss: 'vue-style-loader!css-loader!px2rem-loader?remUnit=40&remPrecision=8!sass-loader'
            },
            extractCSS: true
          }
        },
        {
          test: /\.css$/,
          use: env.production ? ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use:[{
              loader: 'css-loader',
              options: {minimize: true}
            }, {
              loader: 'px2rem-loader',
              options: {
                remUni: 75,
                remPrecision: 8
              }
            }]
          }) : [{
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }, {
            loader: 'px2rem-loader',
            options: {
              remUni: 75,
              remPrecision: 8
            }
          }]
        },
        {
          test: /\.scss$/,
          use: env.production ? ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [{
              loader: 'css-loader?minimize',
              options: {minimize: true}
            }, {
              loader: 'px2rem-loader',
              options: {
                remUni: 75,
                remPrecision: 8
              }
            }, {
              loader: 'sass-loader'
            }]
          }) : [{
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }, {
            loader: 'px2rem-loader',
            options: {
              remUni: 75,
              remPrecision: 8
            }
          }, {
            loader: 'sass-loader'
          }]
          // loader: 'style-loader!css-loader!sass-loader'
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader'
          ]
        }
      ]
    },
    plugins,
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
      }
    },
    output: {
      filename: '[name].min.js',
      path: path.resolve(__dirname, 'dist') // string
    }
  }
}
