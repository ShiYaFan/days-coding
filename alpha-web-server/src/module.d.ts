
declare module '@jd/jss-sdk-node' {
  export interface AppConfigType {
    endpoint: String;
    accessKey: String;
    secretKey: String;
    useHttps: Boolean;
    presignUrl: String;
  }

  export default class Jss {
    constructor(endPoint: String, accessKey: String, secretKey: String, useHttps: Boolean, presignUrl: String): void
    listBucket:() => Promise<Array<any>>
  }

}


