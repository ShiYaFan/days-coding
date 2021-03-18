"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const plugin_1 = require("./plugin");
const router_1 = require("./router");
const app = new koa_1.default();
//使用中间件
plugin_1.useMiddles(app);
//路由
router_1.useRouter(app);
app.use((ctx) => {
    ctx.cookies.set('app', 'hah');
    ctx.body = 'hello';
});
app.listen(9000, () => {
    console.log('server start success');
});
