import { baseApi } from "./baseApi";

const authAPI = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `/auth/login`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: ["user"],
    }),
    postuser: build.mutation({
      query: (signupData) => ({
        url: `/user/signup`,
        method: "POST",
        data: signupData,
      }),
      invalidatesTags: ["signup"],
    }),
    getUser: build.query({
      query: () => ({
        url: "/user/",
        method: "GET",
      }),
      providesTags: ["user", "signup"],
    }),
  }),
});

export const { useUserLoginMutation, useGetUserQuery, usePostuserMutation } =
  authAPI;
