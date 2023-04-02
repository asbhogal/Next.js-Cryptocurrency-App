'use client';

import millify from "millify";
import { useGetCryptoFullListQuery } from "../services/cryptoApi.js";
import { LineWave } from "react-loader-spinner";
import { Chart } from "chart.js";
import CurrencyLineChart from "./CurrencyLineChart.jsx";

const Cryptocurrencies = () => {

    const   { data, isFetching } = useGetCryptoFullListQuery(),
            cryptoCurrencies = data?.data?.coins;
    
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
                        {/* <span>{ currency.sparkline }</span> */}
                    </div>
                )) }
            </div>
        </div>
    )
}

export default Cryptocurrencies;