import { baseApi } from "./baseApi";

const authAPI = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `/auth/login`,
        method: "POST",
        body: loginData,
      }),
      invalidatesTags: ["user"],
    }),
    getUser: build.query({
      query: () => ({
        url: "/user/",
        method: "GET",
      }),
      providesTags: ["user"],
    }),
  }),
});

export const { useUserLoginMutation, useGetUserQuery } = authAPI;
