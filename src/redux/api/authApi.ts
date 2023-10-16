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
    updateUser: build.mutation({
      query: (data) => ({
        url: `/user/my-profile/${data?.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: ["updateuser"],
    }),
    getUser: build.query({
      query: () => ({
        url: "/user/",
        method: "GET",
      }),

      providesTags: ["user", "signup", "updateuser"],
    }),
    getSingleUser: build.query({
      query: (id) => ({
        url: `/user/${id}`,
        method: "GET",
        data: id,
      }),

      providesTags: ["user", "signup", "updateuser"],
    }),
    getuserprofile: build.query({
      query: (id) => ({
        url: `/user/my-profile/${id ? id : userId}`,
        method: "GET",
        data: id,
      }),

      providesTags: ["user", "signup", "updateuser"],
    }),
  }),
});

export const {
  useUserLoginMutation,
  useGetUserQuery,
  usePostuserMutation,
  useUpdateUserMutation,
  useGetuserprofileQuery,
  useGetSingleUserQuery,
} = authAPI;
