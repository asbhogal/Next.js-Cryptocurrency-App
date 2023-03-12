'use client';

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
    'X-RapidAPI-Key': process.env.COINRANKING_RAPID_API_KEY,
    'X-RapidAPI-Host': process.env.COINRANKING_RAPID_API_HOST
}

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoAPI',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.COINRANKING_RAPID_API_URL }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/coins')
        })
    })
});

export const { useGetCryptosQuery, } = cryptoApi;