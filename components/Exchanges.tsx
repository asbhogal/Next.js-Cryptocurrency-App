"use client";

import Link from "next/link";
import { LineWave } from "react-loader-spinner";
import { useGetCryptoExchangesQuery } from "../services/cryptoExchangesApi";
import { ExchangeType } from "@/utils/types";
import millify from "millify";
import { OPTIONS } from "@/utils/constants";

const Exchanges = () => {
  const { data, isFetching } = useGetCryptoExchangesQuery({ count: 10 }),
    exchangeData = data;

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
    <div className="ExchangesPanel">
      <div className="ExchangesTable">
        <h2>Top Crypto Exchanges (Ranked By Trust Score)</h2>
        <div className="TableContainer">
          <div className="TableHeadings">
            <span>Rank & Exchange</span>
            <span>Trust Score</span>
            <span>24hr Trade Vol. (Normalized)</span>
            <span>24hr Trade Vol.</span>
          </div>
          {exchangeData &&
            exchangeData.map((exchanges: ExchangeType) => (
              <Link
                className="ExchangesRow"
                key={exchanges.id}
                href={exchanges.url}
              >
                <div className="ExchangesListSnapshot">
                  <span>{exchanges.trust_score_rank}</span>
                  <img
                    className="ExchangeListIcon"
                    src={exchanges.image}
                    alt={`icon for ${exchanges.name} cryptocurrency`}
                  />
                  <div className="ExchangeListName">{exchanges.name}</div>
                </div>
                <div>
                  <p className="CryptocurrencyMobileHeading">Trust Score</p>
                  <span>{exchanges.trust_score}</span>
                </div>
                <div>
                  <p className="CryptocurrencyMobileHeading">
                    24hr Trade Vol. (Normalized)
                  </p>
                  <span>{`${millify(
                    exchanges.trade_volume_24h_btc,
                    OPTIONS
                  )}`}</span>
                </div>
                <div>
                  <p className="CryptocurrencyMobileHeading">24hr Trade Vol.</p>
                  <span>{`${millify(
                    exchanges.trade_volume_24h_btc_normalized,
                    OPTIONS
                  )}`}</span>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Exchanges;
