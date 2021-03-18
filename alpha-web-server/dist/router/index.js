"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRouter = void 0;
const upload_1 = __importDefault(require("./upload"));
const useRouter = (app) => {
    app.use(upload_1.default.routes()).use(upload_1.default.allowedMethods());
};
exports.useRouter = useRouter;
