import { tagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const tripRequestApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMyTripRequest: build.query({
      query: () => ({
        url: "/trip-request/my-requests",
      }),
      providesTags: [tagTypes.tripRequest],
    }),

    getMyPostedTripRequest: build.query({
      query: () => ({
        url: "/trip-request/my-posted-trips-requests",
      }),
      providesTags: [tagTypes.tripRequest],
    }),

    createRequest: build.mutation({
      query: (id) => ({
        url: `/trip-request/${id}`,
        method: "POST",
      }),
      invalidatesTags: [tagTypes.tripRequest],
    }),

    deleteRequest: build.mutation({
      query: (id) => ({
        url: `/trip-request/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.tripRequest],
    }),

    respondToRequest: build.mutation({
      query: (args) => ({
        url: `/trip-request/${args.id}/respond`,
        method: "PATCH",
        data:{
          status: args.status
        }
      }),
      invalidatesTags: [tagTypes.tripRequest],
    }),



  }),
});

export const {
  useGetMyTripRequestQuery,
  useCreateRequestMutation,
  useDeleteRequestMutation,
  useGetMyPostedTripRequestQuery,
  useRespondToRequestMutation
} = tripRequestApi;
