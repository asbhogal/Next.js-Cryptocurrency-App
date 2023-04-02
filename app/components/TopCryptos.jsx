'use client';

import { useState, useEffect } from "react";
import millify from "millify";
import { useGetCryptosQuery } from "../services/cryptoApi.js";

const TopCryptos = ({ simplified }) => {

    const   count = simplified ? 12 : 100,
            { data: cryptosList, isFetching } = useGetCryptosQuery(count),
            [cryptos, setCryptos] = useState([]),
            [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {

        const top10CurrentCryptos = cryptosList?.data?.coins;

        const filteredData = top10CurrentCryptos.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));

        console.log(top10CurrentCryptos);

        setCryptos(filteredData);

    }, [cryptosList, searchTerm])
    
    return (
        <>
            <div className="TopCryptosHeading">
                <h2>Top 10 Current Cryptocurrencies</h2>
                <div className="SearchCryptos">
                    <input className="SearchCryptosInput" placeholder="Search for cryptocurrencies..." onChange={ (e) => setSearchTerm(e.target.value) } />
                </div>
            </div>
            <div className="TopCryptosListContainer">
                { cryptos?.map((currency) => (
                    <div className="TopCryptosCard" key={ currency.uuid }>
                        <div className="CryptoInfo">
                            <div className="CryptoNameAndRank">
                                <p className="CryptoRank">
                                    { currency.rank }
                                </p>
                                <p className="CryptoName">
                                    { currency.name }
                                </p>
                            </div>
                            <div className="CryptoIcon">
                                <img src={ currency.iconUrl } />
                            </div>
                        </div>
                        <div className="CryptoPrice">
                            <p>Price:</p>
                            <p>{ `$ ${ millify(currency.price, { precision: 3, space: true } ) }` }</p>
                        </div>
                        <div className="CryptoMarketPrice">
                            <p>Market Cap:</p>
                            <p>{ `$ ${ millify(currency.marketCap, { precision: 3, space: true } ) }` }</p>
                        </div>
                        <div className="CryptoChange">
                            <p>Change:</p>
                            <p>{ `${ millify(currency.change, { precision: 3 } ) } %` }</p>
                            {/* {console.log((currency.change).slice(0, 1))} */}
                            {/* { ((currency.change).slice(0, 1)) === '-' 
                                ? document.getElementsByClassName('CryptoChange').style.color = "Red" 
                                : document.getElementsByClassName('CryptoChange').style.color = "Green"
                            } */}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default TopCryptos