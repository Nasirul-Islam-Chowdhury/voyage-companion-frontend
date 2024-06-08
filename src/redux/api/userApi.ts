import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

    getUserProfile: build.query({
      query: () => ({
        url: "/profile",
      }),
    }),

    getAllUsers: build.query({
      query: (args) => ({
        url: "/user",
        params: args
      }),
    }),

    changeUserStatus: build.mutation({
      query: (args) => ({
        url: `/user/${args.id}/status`,
        method: "PATCH",
        params: args.data
      }),
    }),



    updateUserProfile: build.mutation({
      query: (data) => ({
        url: "/profile/update",
        method: "PATCH",
        data: data
      }),
    }),




  }),
});

export const { useGetUserProfileQuery, useUpdateUserProfileMutation, useGetAllUsersQuery, useChangeUserStatusMutation } = userApi;