import { IHttpConfig } from "./app/core/models/http-config.interface";
import { environment } from "./environments/environment";

export const CONFIG = <IHttpConfig> {
  interceptUrls: {
      'api://': {
          root: environment.root_api_url,
          isAuth: true,
          headers: {},
      },
      'userapi://': {
        root: environment.user_api_url,
        isAuth: true,
        headers: {}
      },
      'authapi://': {
        root: environment.authority,
        isAuth: false,
        headers: {}
      }
  },
  service:{
	rootUrl:"https://192.168.243.133:8443/iiq/oauth2"
  }
  ,authConfig: {
    authority: environment.authority,
    signin_url: environment.authority + '/generateToken',
    signout_url: environment.authority + 'logout',
    auth_check: environment.authority + 'check'
  },
  propertiesFile: null
};