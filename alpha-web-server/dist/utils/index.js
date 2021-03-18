"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseErrorJson = exports.responseSuccessJson = exports.errorCode = exports.successCode = void 0;
exports.successCode = 10;
exports.errorCode = 20;
const responseSuccessJson = function (data, code = exports.successCode, message = 'ok') {
    return {
        code,
        data,
        message
    };
};
exports.responseSuccessJson = responseSuccessJson;
const responseErrorJson = function (error, code = exports.errorCode) {
    return {
        code,
        data: null,
        message: error
    };
};
exports.responseErrorJson = responseErrorJson;
