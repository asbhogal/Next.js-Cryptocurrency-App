"use client";

import millify from "millify";
import { useGetCryptoFullListQuery } from "@/services/cryptoApi";
import { LineWave } from "react-loader-spinner";
import { CryptoCurrencyType } from "@/utils/types";
import { OPTIONS } from "@/utils/constants";

const Cryptocurrencies = () => {
  const { data, isFetching } = useGetCryptoFullListQuery({}),
    cryptoCurrencies = data?.data?.coins;

  if (isFetching)
    return (
      <LineWave
        height="100"
        width="100"
        color="#d9d9d9"
        ariaLabel="line-wave"
        wrapperStyle={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
        visible={true}
      />
    );

  return (
    <div className="CryptocurrenciesTable">
      <h2>Top 50 Cryptocurrencies By Market Cap</h2>
      <div className="TableContainer">
        <div className="TableHeadings">
          <span>Name</span>
          <span>Price</span>
          <span>Market Cap</span>
          <span>Change</span>
        </div>
        {cryptoCurrencies.map((currency: CryptoCurrencyType) => (
          <div className="CryptocurrenciesRow" key={currency.uuid}>
            <div className="CryptoListSnapshot">
              {currency.rank}
              <img
                className="CryptoListIcon"
                src={currency.iconUrl}
                alt={`icon for ${currency.name} cryptocurrency`}
              />
              <div className="CryptoListNameAndSymbol">
                <span>{currency.name}</span>
                <span>{currency.symbol}</span>
              </div>
            </div>
            <div>
              <p className="CryptocurrencyMobileHeading">Price</p>
              <span>{`$ ${millify(currency.price, OPTIONS)}`}</span>
            </div>
            <div>
              <p className="CryptocurrencyMobileHeading">Market Cap</p>
              <span>{`$ ${millify(currency.marketCap, OPTIONS)}`}</span>
            </div>
            <div>
              <p className="CryptocurrencyMobileHeading">Change</p>
              <span>{`${millify(currency.change, { precision: 3 })} %`}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cryptocurrencies;
