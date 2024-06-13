"use client"
import { authKey } from '@/constants/authKey';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { deleteCookies } from './actions/deleteCookies';

export const logoutUser = (router: AppRouterInstance) => {
   localStorage.removeItem(authKey);
   deleteCookies([authKey, 'refreshToken']);
   router.refresh();
   router.push('/');
};