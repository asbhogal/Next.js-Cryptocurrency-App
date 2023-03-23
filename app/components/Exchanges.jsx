'use client';

import Link from "next/link";
import { LineWave } from "react-loader-spinner";
import { useGetCryptoExchangesQuery } from "../services/cryptoExchangesApi";

const Exchanges = () => {

  const   { data, isFetching } = useGetCryptoExchangesQuery({ count: 10 }),
          exchangeData = data;

  if(isFetching) return   <LineWave
                            height="100"
                            width="100"
                            color="#d9d9d9"
                            ariaLabel="line-wave"
                            wrapperStyle={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '100%'
                            }}
                            visible={true}
                          />

  console.log(exchangeData)

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
          { exchangeData.map((exchanges) => (
            <Link className="ExchangesRow" key={ exchanges.id } href={ exchanges.url }>
              <div className="ExchangesListSnapshot">
                <span>{ exchanges.trust_score_rank }</span>
                <img className="ExchangeListIcon" src={ exchanges.image } />
                <div className="ExchangeListName">
                  {exchanges.name}
                </div>
              </div>
              <span>{ exchanges.trust_score }</span>
              <span>{ exchanges.trade_volume_24h_btc }</span>
              <span>{ exchanges.trade_volume_24h_btc_normalized }</span>
            </Link>
          )) }
        </div>
      </div>
    </div>
  )
}

export default Exchanges