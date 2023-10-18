import { tagTypes } from "@/shared/tagTypes";
import { baseApi } from "./baseApi";

const serviceapi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createAroom: build.mutation({
      query: (data) => ({
        url: `/room/`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.room],
    }),
    updateAroom: build.mutation({
      query: (data) => ({
        url: `/room/${data?.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.room],
    }),
    getallrooms: build.query({
      query: () => ({
        url: "/room/",
        method: "GET",
      }),

      providesTags: [tagTypes.room],
    }),
    getsinglerooms: build.query({
      query: (id) => ({
        url: `/room/${id}`,
        method: "GET",
      }),

      providesTags: [tagTypes.room],
    }),

    deleterooms: build.mutation({
      query: (id) => ({
        url: `/room/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.room],
    }),
  }),
});

export const {
  useGetallroomsQuery,
  useGetsingleroomsQuery,
  useCreateAroomMutation,
  useUpdateAroomMutation,
  useDeleteroomsMutation,
} = serviceapi;
