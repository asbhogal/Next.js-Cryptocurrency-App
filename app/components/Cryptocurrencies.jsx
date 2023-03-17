'use client';

import millify from "millify";
import { useGetCryptoFullListQuery } from "../services/cryptoApi.js";

const Cryptocurrencies = () => {

    const   { data, isFetching } = useGetCryptoFullListQuery(),
            cryptoCurrencies = data?.data?.coins;
    
    if(isFetching) return 'Please wait, data loading...';

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
    )
}

export default Cryptocurrencies;