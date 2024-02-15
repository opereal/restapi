import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import {authApi} from "../lib/APIs/authApi";
import {userApi} from "../lib/APIs/userApi";

export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
},

middleware: (getDefaultMiddleware) =>
getDefaultMiddleware().concat(userApi.middleware, authApi.middleware),
});

setupListeners(store.dispatch)

