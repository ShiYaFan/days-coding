const Router = require('koa-router')
const router = new Router()

/**
 * 普通路由 /user
 * 具名路由 /user/:id
 * 正则路由
 * 嵌套路由 /^\/all\/*
 */

router.get('/', async (ctx, next) => {
  ctx.body = { test: 'welcome', query: ctx.query }
})

//具名路由
router.get('/get/:id', (ctx, next) => {
  ctx.body = ctx.params
})

//正则路由
router.get(/^\/all\/*/, (ctx) => {
  ctx.body = { test: ctx.path }
})

module.exports = router
