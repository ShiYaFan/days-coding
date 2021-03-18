"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FILE_URL = exports.APP_CONFIG = exports.isProduction = exports.isDevelopment = void 0;
exports.isDevelopment = process.env.NODE_ENV === 'development';
exports.isProduction = process.env.NODE_ENV === 'production';
let APP_CONFIG;
exports.APP_CONFIG = APP_CONFIG;
let FILE_URL;
exports.FILE_URL = FILE_URL;
if (exports.isDevelopment) {
    //jdcartest
    exports.APP_CONFIG = APP_CONFIG = {
        endpoint: 'test.storage.jd.com',
        accessKey: 'yAwb1AdHMUYw7mUr',
        secretKey: 'DUUMJP9dcbpQfVMcVLkmmgp81yukwg6VjRO4rsHb',
        useHttps: false,
        presignUrl: 'test.storage.jd.com'
    };
    exports.FILE_URL = FILE_URL = 'http://test.storage.jd.com/';
}
