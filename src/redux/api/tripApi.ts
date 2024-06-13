import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const tripApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTrip: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/trips",
        method: "GET",
        params: arg,
      }),
      providesTags: [tagTypes.trip],
    }),

    getSingleTrip: build.query({
      query: (id) => ({
        url: `/trips/${id}`,
      }),
      providesTags: [tagTypes.trip],
    }),

    getMyTrips: build.query({
      query: () => ({
        url: `/trips/my-trips`,
      }),
      providesTags: [tagTypes.trip],
    }),

    deleteSingleTrip: build.mutation({
      query: (id: string) => ({
        url: `/trips/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.trip],
    }),

    postTrip: build.mutation({
      query: (data) => ({
        url: "/trips",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.trip],
    }),
  }),
});

export const {
  usePostTripMutation,
  useGetTripQuery,
  useDeleteSingleTripMutation,
  useGetSingleTripQuery,
  useGetMyTripsQuery,
  
} = tripApi;
