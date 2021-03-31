const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')
const path = require('path')
const {resolve} =  path
module.exports = {
  //入口
  entry: {
    app:resolve(__dirname,'src/index.js')
  },
  //出口
  output: {
    filename:'static/js/[name].bundle.js',
    path:resolve(__dirname,'dist'),
    publicPath: "/"
  },
  //模块加载器
  module:{
    rules:[
      {
        test: /\.css$/i,
        use: ["vue-style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'static/img/[name].[hash:7].[ext]'
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'index.html',
      filename:'index.html'
    }),
    new VueLoaderPlugin()
  ],

  devServer:{
    historyApiFallback: true,
    open:true
  },
  devtool:'cheap-module-eval-source-map',
  resolve:{
    extensions: ['.js', '.vue', '.json'], // 可以省略的后缀名
    alias: { // 路径别名(简写方式)
      'vue$': 'vue/dist/vue.esm.js',  // 表示精准匹配
      '@':resolve(__dirname,'src'),
      '@components':resolve(__dirname,'src/components')
    }
  }
}