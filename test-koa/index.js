
const Koa = require('koa')
const app = new Koa()
const useRouterMiddle = require('./middles/useRouterMiddle')
const userMiddle = require('./middles/useMiddle')

userMiddle(app)

useRouterMiddle(app)

app.listen(4000)

/**
 koa-router
 koa-views
 koa-static
 koa-mount 将中间件挂载到指定 路径
 */