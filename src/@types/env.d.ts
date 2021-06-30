declare namespace NodeJS {
  export interface ProcessEnv {
    REDIRECT_URI: string;
    SCOPE: string;
    RESPONSE_TYPE: "token" | "code";
    CLIENT_ID: string;
    CDN_IMAGE: string;
  }
}
