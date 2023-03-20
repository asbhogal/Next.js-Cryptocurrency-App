'use client';

import { configureStore, middleware } from "@reduxjs/toolkit";

import { cryptoApi } from "../services/cryptoApi";
import { cryptoExchangesApi } from "../services/cryptoExchangesApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
        [cryptoExchangesApi.reducerPath]: cryptoExchangesApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(cryptoApi.middleware, cryptoNewsApi.middleware, cryptoExchangesApi.middleware),
});