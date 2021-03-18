
import { AppConfigType } from '@jd/jss-sdk-node'

export const isDevelopment = process.env.NODE_ENV === 'development'
export const isProduction = process.env.NODE_ENV === 'production'

let APP_CONFIG: AppConfigType
let FILE_URL:string
if (isDevelopment) {
  //jdcartest
  APP_CONFIG = {
    endpoint: 'test.storage.jd.com',
    accessKey: 'yAwb1AdHMUYw7mUr',
    secretKey: 'DUUMJP9dcbpQfVMcVLkmmgp81yukwg6VjRO4rsHb',
    useHttps: false,
    presignUrl: 'test.storage.jd.com'
  }
  FILE_URL = 'http://test.storage.jd.com/'
}

export {
  APP_CONFIG,
  FILE_URL
}
