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
