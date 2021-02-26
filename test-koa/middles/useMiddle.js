
const koaStatic = require('koa-static')
const { resolve } = require('path')

module.exports = function (app) {
  app.use(async (ctx, next) => {
    console.log(`path:${ctx.path} start`)
    await next()
    console.log(`path:${ctx.path} end`)
  })
  
  app.use(koaStatic(resolve(__dirname, '../static')));
}