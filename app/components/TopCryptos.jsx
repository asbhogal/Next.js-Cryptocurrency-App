'use client';

import Link from "next/link.js";
import { useState } from "react";
import millify from "millify";
import { useGetCryptosQuery } from "../services/cryptoApi.js";

const TopCryptos = () => {

    const   { data: cryptosList, isFetching } = useGetCryptosQuery(),
            [cryptos, setCryptos] = useState(cryptosList?.data?.coins);

    console.log(cryptos);
    
    return (
        <>
            <div className="TopCryptosListContainer">
                { cryptos.slice(0, 10).map((currency) => (
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
                            <p>{ `$ ${ millify(currency.price, { precision: 3} ) }` }</p>
                        </div>
                        <div className="CryptoMarketPrice">
                            <p>Market Cap:</p>
                            <p>{ `$ ${ millify(currency.marketCap, { precision: 3} ) }` }</p>
                        </div>
                        <div className="CryptoChange">
                            <p>Change:</p>
                            <p>{ `${ millify(currency.change, { precision: 3} ) }%` }</p>
                            {console.log((currency.change).slice(0, 1))}
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