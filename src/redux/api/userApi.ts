import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

    getUserProfile: build.query({
      query: () => ({
        url: "/profile",
      }),
      providesTags: [tagTypes.user, tagTypes.profile]
    }),

    getAllUsers: build.query({
      query: (args) => ({
        url: "/user",
        params: args
      }),
      providesTags: [tagTypes.user]
    }),

    changeUserStatus: build.mutation({
      query: (args) => ({
        url: `/user/${args.id}/status`,
        method: "PATCH",
        params: args.data
      }),
      invalidatesTags: [tagTypes.user]
    }),

    changePassword: build.mutation({
      query: (data) => ({
        url: `/auth/change-password`,
        method: "PATCH",
        data: data
      }),
      invalidatesTags: [tagTypes.user]
    }),



    updateUserProfile: build.mutation({
      query: (data) => ({
        url: "/profile/update",
        method: "PATCH",
        data: data
      }),
      invalidatesTags: [tagTypes.profile, tagTypes.user]
    }),




  }),
});

export const { useGetUserProfileQuery, useUpdateUserProfileMutation, useGetAllUsersQuery, useChangeUserStatusMutation, useChangePasswordMutation } = userApi;