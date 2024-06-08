
import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const tripApi = baseApi.injectEndpoints({
  endpoints: (build) => ({

    getTrip: build.query({
      query: (arg: Record<string, any>) => ({
        url: '/trips',
        method: 'GET',
        params: arg,
     }),
     providesTags: [tagTypes.trip]
    }),

    getSingleTrip: build.query({
      query: (arg: Record<string, any>) => ({
        url: `/trips/${arg?.id}`,
        method: 'GET',
        params: arg,
        
     }),
     providesTags: [tagTypes.trip]
    }),

    deleteSingleTrip: build.mutation({
      query: (id: string) => ({
        url: `/trips/${id}`,
        method: 'DELETE',
     }),
     invalidatesTags: [tagTypes.trip]
    }),


    postTrip: build.mutation({
      query: (data) => ({
        url: "/trips",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
      invalidatesTags: [tagTypes.trip],
    }),

  }),



});

export const { usePostTripMutation, useGetTripQuery, useDeleteSingleTripMutation } = tripApi;