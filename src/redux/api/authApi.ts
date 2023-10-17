import Cookies from "universal-cookie";
import { baseApi } from "./baseApi";
import { tagTypes } from "@/shared/tagTypes";
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
      invalidatesTags: [tagTypes.user],
    }),
    postuser: build.mutation({
      query: (signupData) => ({
        url: `/user/signup`,
        method: "POST",
        data: signupData,
      }),
      invalidatesTags: [tagTypes.signup],
    }),
    updateUser: build.mutation({
      query: (data) => ({
        url: `/user/my-profile/${data?.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.updateuser],
    }),
    getUser: build.query({
      query: () => ({
        url: "/user/",
        method: "GET",
      }),

      providesTags: [tagTypes.updateuser, tagTypes.signup, tagTypes.delete],
    }),
    getSingleUser: build.query({
      query: (id) => ({
        url: `/user/${id}`,
        method: "GET",
      }),

      providesTags: [tagTypes.updateuser, tagTypes.signup, tagTypes.delete],
    }),
    getuserprofile: build.query({
      query: (id) => ({
        url: `/user/my-profile/${id ? id : userId}`,
        method: "GET",
        data: id,
      }),

      providesTags: [tagTypes.updateuser, tagTypes.signup, tagTypes.delete],
    }),
    deleteuser: build.mutation({
      query: (id) => ({
        url: `/user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.delete],
    }),
  }),
});

export const {
  useUserLoginMutation,
  useGetUserQuery,
  useDeleteuserMutation,
  usePostuserMutation,
  useUpdateUserMutation,
  useGetuserprofileQuery,
  useGetSingleUserQuery,
} = authAPI;
