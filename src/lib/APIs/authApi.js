import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001",
    }),

  endpoints: (builder)  => ({
    loginUser: builder.mutation({
        query: (payload) => ({
            url: "/auth/login",
            method: "POST",
            body: payload,
}),
        }),
}),
});

export const {useLoginUserMutation} = authApi;