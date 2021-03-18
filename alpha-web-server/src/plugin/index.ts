
import Koa from 'koa'
import Jss from '@jd/jss-sdk-node'
import koaBody from 'koa-body'
import cors from 'koa2-cors'
import { APP_CONFIG, isProduction } from '../config'


let jd_jss = new Jss(APP_CONFIG.endpoint, APP_CONFIG.accessKey, APP_CONFIG.secretKey, APP_CONFIG.useHttps, APP_CONFIG.presignUrl)

// let bucket = jd_jss.bucket('jdcar.com').object('微信截图_20210310115541.png').get().then(res => {
//   console.log(bucket)
// })
export const useMiddles = (app: Koa) => {
  //跨域设置
  app.use(cors(
    {
      origin: 'http://localhost:3000',
      credentials: true
    }
  ));

  //注入
  app.use(async (ctx, next) => {
    ctx.JSS = jd_jss
    await next()
  });
  //中间件 解析参数
  app.use(koaBody({
    multipart: true
  }));


}
