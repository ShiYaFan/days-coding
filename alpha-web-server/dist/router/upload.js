"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const index_1 = require("../utils/index");
const fs_1 = __importDefault(require("fs"));
const crypto_1 = __importDefault(require("crypto"));
const router = new koa_router_1.default();
const hash = crypto_1.default.createHash('md5');
/**
 * @param file { Blob }
 * @param appName { string } 注册项目名称
 */
router.post('/api/upload', async (ctx, next) => {
    const appName = ctx.request.body.appName;
    const file = ctx.request.files ? ctx.request.files.file : undefined;
    //检测参数
    if (!appName) {
        ctx.body = index_1.responseErrorJson('appName 参数不能为空');
        return;
    }
    if (!file) {
        ctx.body = index_1.responseErrorJson('file 参数不能为空');
        return;
    }
    try {
        let isHas = await ctx.JSS.hasBucket(appName);
        if (!isHas) {
            ctx.body = index_1.responseErrorJson('该业务线不存在');
            return;
        }
        const bucket = ctx.JSS.bucket(appName);
        const stream = fs_1.default.createReadStream(file.path);
        const fileObject = bucket.object(file.name);
        await fileObject.putStream(stream);
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
    }
    catch (e) {
        ctx.body = index_1.responseErrorJson('系统错误');
    }
});
router.post('/message', (ctx) => {
    ctx.body = { code: 10 };
});
exports.default = router;
