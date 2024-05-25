import { decodedToken } from '@/app/utils/jwt';
import { getFromLocalStorage, removeFromLocalStorage, setToLocalStorage } from '@/app/utils/local-storage';
import { authKey } from '@/constants/authKey';
import { instance as axiosInstance } from '@/helpers/axios/axioInstance';




export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
   //   console.log(accessToken);
   return setToLocalStorage(authKey, accessToken);
};

export const getUserInfo = () => {
   const authToken = getFromLocalStorage(authKey);
   //   console.log(authToken);
   if (authToken) {
      const decodedData: any = decodedToken(authToken);
      return {
         ...decodedData,
         role: decodedData?.role?.toLowerCase(),
      };
   } else {
      return '';
   }
};

export const isLoggedIn = () => {
   const authToken = getFromLocalStorage(authKey);
   if (authToken) {
      return !!authToken;
   }
};

export const removeUser = () => {
   return removeFromLocalStorage(authKey);
};

export const getNewAccessToken = async () => {
   return await axiosInstance({
      url: 'http://localhost:5000/api/v1/auth/refresh-token',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
   });
};