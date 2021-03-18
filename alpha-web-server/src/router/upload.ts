

import KoaRouter from 'koa-router'
import { FILE_URL } from '../config/index'
import { responseSuccessJson,responseErrorJson } from '../utils/index'
import Koa from 'koa'
import fs from 'fs'
import crypto from 'crypto'
const router = new KoaRouter()
const hash = crypto.createHash('md5')

/**
 * @param file { Blob } 
 * @param appName { string } 注册项目名称
 */
router.post('/api/upload',async (ctx:Koa.Context,next) => {
  const appName = ctx.request.body.appName
  const file:any = ctx.request.files ? ctx.request.files.file : undefined
  //检测参数
  if(!appName){
    ctx.body = responseErrorJson('appName 参数不能为空')
    return 
  }
  if(!file){
    ctx.body = responseErrorJson('file 参数不能为空')
    return
  }
  try{
    let isHas = await ctx.JSS.hasBucket(appName)
    if(!isHas){
      ctx.body = responseErrorJson('该业务线不存在')
      return
    }
    const bucket = ctx.JSS.bucket(appName)

    const stream = fs.createReadStream(file.path)
    const fileObject = bucket.object(file.name)
    await fileObject.putStream(stream)    

    // stream.on('data',(chunk:any) => {
    //   hash.update(chunk,'utf-8')
    // })
    // stream.on('end',() => {
    //   const md5 = hash.digest('hex')
    //   let fileName = `${md5}.${file.name.replace(/.+\./,'')}`
    //   const fileObject = bucket.object(fileName)
    //   fileObject.putStream(stream,md5,fileName).then(() => {
    //     let url = `${FILE_URL}${appName}/${fileName}`
    //     ctx.body = responseSuccessJson<string>(url)
    //   })

    // })

  }catch(e){
    ctx.body = responseErrorJson('系统错误')
  }
  
})


router.post('/message',(ctx) => {
  ctx.body = { code:10 }
})

export default router