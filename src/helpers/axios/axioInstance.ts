import { getFromLocalStorage, setToLocalStorage } from '@/app/utils/local-storage';
import { authKey } from '@/constants/authKey';

import setAccessToken from '@/services/actions/setAccessToken';
import { getFromCookie, getNewAccessToken } from '@/services/auth.services';
import { IGenericErrorResponse, ResponseSuccessType } from '@/types';

import axios from 'axios';

const instance = axios.create();
instance.defaults.headers.post['Content-Type'] = 'application/json';
instance.defaults.headers['Accept'] = 'application/json';
instance.defaults.timeout = 60000;

// Add a request interceptor
instance.interceptors.request.use(
   async (config) => {
     const accessToken = getFromLocalStorage(authKey);

     if (accessToken) {
       config.headers.authorization = accessToken
     }
     return config;
   },
   (error) => Promise.reject(error)
 );

// Add a response interceptor
instance.interceptors.response.use(
   //@ts-ignore
   function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      const responseObject: ResponseSuccessType = {
         data: response?.data?.data,
         meta: response?.data?.meta,
      };
      return responseObject;
   },
   async function (error) {

      const config = error.config;

      if (error?.response?.status === 500 && !config.sent) {
         config.sent = true;
         const response =  await getNewAccessToken();
         const accessToken = response?.data?.accessToken as string;
         config.headers['Authorization'] = accessToken;
         setToLocalStorage(authKey, accessToken);
         setAccessToken(accessToken);
         return instance(config);
      } else {
         const responseObject: IGenericErrorResponse = {
            statusCode: error?.response?.data?.statusCode || 500,
            message:
               error?.response?.data?.message || 'Something went wrong!!!',
            errorMessages: error?.response?.data?.message,
         };
         // return Promise.reject(error);
         return responseObject;
      }
   }
);

export { instance };