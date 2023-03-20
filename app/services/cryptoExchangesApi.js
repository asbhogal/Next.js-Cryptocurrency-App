'use client';

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const cryptoExchangeApiHeaders = {
    'X-RapidAPI-Key': '190ed1891dmsh0f339dde7266f5ep1901a8jsn1a4adbdef18d',
    'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
}

const baseUrl = 'https://coingecko.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoExchangeApiHeaders })

export const cryptoExchangesApi = createApi({
    reducerPath: 'cryptoExchangesApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoExchanges: builder.query({
            query: (count) => createRequest(`/exchanges?per_page=${ count }`)
        })
    })
})

export const { useGetCryptoExchangesQuery } = cryptoExchangesApi;