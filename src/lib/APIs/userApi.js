import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001",
    }),

  endpoints: (builder)  => ({
    createUser: builder.mutation({
        query: (payload) => ({
            url: "/users",
            method: "POST",
            body: payload,
}),
        }),

getCurrentUser: builder.mutation({
    query: () => ({
        url: "/users/me",
        method: "GET",
        credentials: "include",
    }),
}),
}),
});

export const {useCreateUserMutation, useGetCurrentUserMutation} = userApi