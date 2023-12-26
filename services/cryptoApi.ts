"use client";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": process.env.NEXT_PUBLIC_COINRANKING_RAPID_API_KEY,
  "X-RapidAPI-Host": process.env.NEXT_PUBLIC_COINRANKING_RAPID_API_HOST,
};

const baseUrl = process.env.NEXT_PUBLIC_COINRANKING_RAPID_API_URL;

const createRequest = (url: string) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoAPI",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoFullList: builder.query({
      query: () => createRequest("/coins"),
    }),
  }),
});

export const { useGetCryptosQuery, useGetCryptoFullListQuery } = cryptoApi;
