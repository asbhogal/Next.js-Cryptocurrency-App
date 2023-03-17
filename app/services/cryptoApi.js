'use client';

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '190ed1891dmsh0f339dde7266f5ep1901a8jsn1a4adbdef18d',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoAPI',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${ count }`)
        }),
        getCryptoFullList: builder.query({
            query: () => createRequest('/coins')
        })
    })
});

export const { useGetCryptosQuery, useGetCryptoFullListQuery } = cryptoApi;