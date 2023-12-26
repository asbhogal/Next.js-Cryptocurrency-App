"use client";

import { useState, useEffect } from "react";
import millify from "millify";
import { useGetCryptosQuery } from "@/services/cryptoApi";
import { CoinType, CryptoCurrencyType } from "@/utils/types";

const TopCryptos = ({ simplified }: { simplified: boolean }) => {
  const count = simplified ? 10 : 100,
    { data: cryptosList } = useGetCryptosQuery(count),
    [cryptos, setCryptos] = useState([]),
    [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const top10CurrentCryptos = cryptosList?.data?.coins;

    const filteredData = top10CurrentCryptos.filter((coin: CoinType) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  return (
    <>
      <div className="TopCryptosHeading">
        <h2>Top 10 Current Cryptocurrencies</h2>
        <div className="SearchCryptos">
          <input
            className="SearchCryptosInput"
            placeholder="Search for cryptocurrencies..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="TopCryptosListContainer">
        {cryptos?.map((currency: CryptoCurrencyType) => (
          <div className="TopCryptosCard" key={currency.uuid}>
            <div className="CryptoInfo">
              <div className="CryptoNameAndRank">
                <p className="CryptoRank">{currency.rank}</p>
                <p className="CryptoName">{currency.name}</p>
              </div>
              <div className="CryptoIcon">
                <img
                  src={currency.iconUrl}
                  alt={`icon for ${currency.name} cryptocurrency`}
                />
              </div>
            </div>
            <div className="CryptoPrice">
              <p>Price:</p>
              <p>{`$ ${millify(currency.price, {
                precision: 3,
                space: true,
              })}`}</p>
            </div>
            <div className="CryptoMarketPrice">
              <p>Market Cap:</p>
              <p>{`$ ${millify(currency.marketCap, {
                precision: 3,
                space: true,
              })}`}</p>
            </div>
            <div className="CryptoChange">
              <p>Change:</p>
              <p>{`${millify(currency.change, { precision: 3 })} %`}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TopCryptos;
