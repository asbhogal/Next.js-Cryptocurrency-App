import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const cryptoAPIHeaders = {
    'X-RapidAPI-Key': process.env.COINRANKING_RAPID_API_KEY,
    'X-RapidAPI-Host': process.env.COINRANKING_RAPID_API_HOST
}

const createRequest = (url) => ({ url, headers: cryptoAPIHeaders })

export const cryptoAPI = createApi({
    reducerPath: 'cryptoAPI',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.COINRANKING_RAPID_API_URL }),
    endpoints: (builder) => ({
        getCrypto: builder.query({
            query: () => createRequest('/coins')
        })
    })
})

export const { useGetCryptoQuery } = cryptoAPI;