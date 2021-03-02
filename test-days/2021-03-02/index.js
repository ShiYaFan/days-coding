
/**
 * 地址：https://blog.csdn.net/weixin_34396902/article/details/93170277
 package.json 文件中 main module  browser 字段

 node 环境执行代码 只有 main字段有效

 webpack + web + ESM
 import test from 'test'
 webpack + web + commonJs
 const test = require('test)
 实际上的加载优先级是 browser = browser+mjs > module > browser+cjs > main


 webpack模块化原理
 参考文章：https://segmentfault.com/a/1190000010349749


 */