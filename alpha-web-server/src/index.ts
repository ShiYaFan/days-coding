
import Koa from 'koa'
import { useMiddles } from './plugin'
import { useRouter } from './router'

const app = new Koa()

//使用中间件
useMiddles(app)
//路由
useRouter(app)

app.use((ctx) => {
  ctx.cookies.set('app','hah')
  ctx.body = 'hello'
});
app.listen(9000,() => {
  console.log('server start success')
})