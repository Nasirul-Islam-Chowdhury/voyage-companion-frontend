import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUserProfile: build.query({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetUserProfileQuery } = userApi;