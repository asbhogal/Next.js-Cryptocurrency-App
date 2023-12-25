"use client";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoExchangeApiHeaders = {
  "X-RapidAPI-Key": process.env.NEXT_PUBLIC_COINGECKO_RAPID_API_KEY,
  "X-RapidAPI-Host": process.env.NEXT_PUBLIC_COINGECKO_RAPID_API_HOST,
};

const baseUrl = process.env.NEXT_PUBLIC_COINGECKO_RAPID_API_URL;

const createRequest = (url: string) => ({
  url,
  headers: cryptoExchangeApiHeaders,
});

export const cryptoExchangesApi = createApi({
  reducerPath: "cryptoExchangesApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoExchanges: builder.query({
      query: ({ count }) => createRequest(`?per_page=${count}`),
    }),
  }),
});

export const { useGetCryptoExchangesQuery } = cryptoExchangesApi;
