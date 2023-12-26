"use client";

import { CryptoNewsData } from "@/utils/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.NEXT_PUBLIC_THE_NEWS_API_URL;

const createRequest = (url: string) => ({
  url,
});

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query<CryptoNewsData, { newsCategory: string }>({
      query: ({ newsCategory }) =>
        createRequest(
          `/all?api_token=${process.env.NEXT_PUBLIC_THE_NEWS_API_KEY}&search=${newsCategory}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
