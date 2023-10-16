import Cookies from "universal-cookie";
import { baseApi } from "./baseApi";
const cookie = new Cookies();
const userId = cookie.get("userId");
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
    getuserprofile: build.query({
      query: () => ({
        url: `/user/my-profile/${userId}`,
        method: "GET",
      }),

      providesTags: ["user", "signup"],
    }),
  }),
});

export const {
  useUserLoginMutation,
  useGetUserQuery,
  usePostuserMutation,
  useGetuserprofileQuery,
} = authAPI;
