

interface ResponseJsonType<T> {
  code: number;
  data: T;
  message: string
}

export const successCode = 10
export const errorCode = 20

export const responseSuccessJson = function <T>(data: T, code: number = successCode, message: string = 'ok'): ResponseJsonType<T> {
  return {
    code,
    data,
    message
  }
}

export const responseErrorJson = function (error: string, code: number = errorCode): ResponseJsonType<null> {
  return {
    code,
    data: null,
    message: error
  }
}



