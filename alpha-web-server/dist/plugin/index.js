"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMiddles = void 0;
const jss_sdk_node_1 = __importDefault(require("@jd/jss-sdk-node"));
const koa_body_1 = __importDefault(require("koa-body"));
const koa2_cors_1 = __importDefault(require("koa2-cors"));
const config_1 = require("../config");
let jd_jss = new jss_sdk_node_1.default(config_1.APP_CONFIG.endpoint, config_1.APP_CONFIG.accessKey, config_1.APP_CONFIG.secretKey, config_1.APP_CONFIG.useHttps, config_1.APP_CONFIG.presignUrl);
// let bucket = jd_jss.bucket('jdcar.com').object('微信截图_20210310115541.png').get().then(res => {
//   console.log(bucket)
// })
const useMiddles = (app) => {
    //跨域设置
    app.use(koa2_cors_1.default({
        origin: 'http://localhost:3000',
        credentials: true
    }));
    //注入
    app.use(async (ctx, next) => {
        ctx.JSS = jd_jss;
        await next();
    });
    //中间件 解析参数
    app.use(koa_body_1.default({
        multipart: true
    }));
};
exports.useMiddles = useMiddles;
