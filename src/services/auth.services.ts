"use server"

import { getFromLocalStorage, removeFromLocalStorage, setToLocalStorage } from '@/app/utils/local-storage';
import { authKey } from '@/constants/authKey';
import { instance as axiosInstance } from '@/helpers/axios/axioInstance';
import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers';



export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {

   return setToLocalStorage(authKey, accessToken);
};

export async function getUserInfo() {
   try {
     const accessToken = cookies().get("accessToken")?.value;
     if (accessToken) {
       let decodedData = null;
       decodedData = await jwtDecode(accessToken);
       return {
         email: decodedData.email,
         role: decodedData.role,
         id: decodedData.id,
       };
     }
     {
       return null;
     }
   } catch (error) {
     throw error;
   }
 }

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


export async function logOut() {
   try {
    cookies().delete("accessToken")
    cookies().delete("refreshToken")
    removeFromLocalStorage(authKey)
   
   } catch (error) {
     throw error;
   }
 }