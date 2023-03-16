'use client';

import React from 'react'
import millify from "millify";
import { useGetCryptoFullListQuery } from "../services/cryptoApi.js";


const Cryptocurrencies = () => {

    const   { data, isFetching } = useGetCryptoFullListQuery(),
            cryptoCurrencies = data?.data?.coins;
    
    if(isFetching) return 'Please wait, data loading...';

    console.log(cryptoCurrencies);

  return (
    <div>
        <div className="CryptocurrenciesTable">
            <div>
                <div className="TableHeadings">
                    <span>Rank</span>
                    <span>Icon</span>
                    <span>Name & Symbol</span>
                    <span>Price</span>
                    <span>Market Cap</span>
                    <span>Change</span>
                </div>
                { cryptoCurrencies.map((currency) => (
                    <div className="CryptocurrenciesRow" key={ currency.uuid }>
                        <div className="CryptoListSnapshot">
                            { currency.rank }
                            <img className="CryptoListIcon" src={ currency.iconUrl } />
                            <div className="CryptoListNameAndSymbol">
                                <span>{ currency.name }</span>
                                <span>{ currency.symbol }</span>
                            </div>
                        </div>
                        <span>{ `$ ${ millify(currency.price, { precision: 3, space: true } ) }` }</span>
                        <span>{ `$ ${ millify(currency.marketCap, { precision: 3, space: true } ) }` }</span>
                        <span>{ `${ millify(currency.change, { precision: 3 } ) } %` }</span>
                    </div>
                )) }
            </div>
        </div>
    </div>
  )
}

export default Cryptocurrencies