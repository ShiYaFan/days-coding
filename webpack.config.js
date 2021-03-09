

const path = require('path');
const HelloWorldPlugin = require('./test-webpack/HelloWorldPlugin.js')
module.exports = {
  entry: {
    app: './test-webpack/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /.(png|jpeg|jpg)$/i,
        type: 'asset/resource'
      }
    ]
  },
  externals: {
    vue: 'vue'
    //webpack打包时，发现vue定义在externals，则不会打包vue代码。由于不需要打包vue，所以也减少打包时间
  },
  resolve: {
    extensions: ['.js', '.vue'],

    modules: [ // 优化模块查找路径

      path.resolve('src'),

      path.resolve('node_modules') // 指定node_modules所在位置 当你import 第三方模块时 直接从这个路径下搜索寻找

    ]

  },
  plugins: [
    new HelloWorldPlugin({ options: true })
  ]
};
/**
 * 1、缩小文件匹配范围(include/exclude)
 * 2、缓存loader的执行结果(cacheDirectory)
 * 3、HappyPack是让webpack对loader的执行过程，从单一进程形式扩展为多进程模式，也就是将任务分解给多个子进程去并发的执行，子进程处理完后再把结果发送给主进程。从而加速代码构建 与 DLL动态链接库结合来使用更佳。
 *
 * 编写插件
 * https://www.cnblogs.com/tugenhua0707/p/11332463.html
 */