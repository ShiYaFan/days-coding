
import Koa from 'koa'
import uploadRouter from './upload'


export const useRouter = (app: Koa) => {
  app.use(uploadRouter.routes()).use(uploadRouter.allowedMethods());
  
}