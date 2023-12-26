export type CryptoCurrencyType = {
  uuid: string;
  rank: number;
  iconUrl: string;
  name: string;
  symbol: string;
  price: number;
  marketCap: number;
  change: number;
};

/* export type TopCryptosType = CryptoCurrencyType & {
  "24hVolume": string;
  lowVolume: number;
}; */

export type CoinType = {
  name: string;
  price: number;
  symbol: string;
};

export type ExchangeType = {
  id: string;
  url: string;
  name: string;
  image: string;
  trade_volume_24h_btc: number;
  trust_score: number;
  trust_score_rank: number;
  trade_volume_24h_btc_normalized: number;
};

export interface NewsData {
  uuid: string;
  title: string;
  description: string;
  keywords: string;
  snippet: string;
  url: string;
  image_url: string;
  language: string;
  published_at: string;
  source: string;
  categories: string[];
  relevance_score: number;
}

export interface CryptoNewsData {
  meta: {
    found: number;
    returned: number;
    limit: number;
    page: number;
  };
  data: NewsData[];
}
