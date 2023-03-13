'use client';

import millify from "millify";

import { useGetCryptosQuery } from "../services/cryptoApi.js";

const Dashboard = () => {

    const   { data, isFetching } = useGetCryptosQuery(),
            globalStats = data?.data?.stats;
    
    if(isFetching) return 'Please wait, data loading...';

    console.log(globalStats);

    return (
        <>
            <div className="DashboardHeading">
                <h2>Global Crypto Stats</h2>
            </div>
            <div className="CryptoSnapshots">
                <div className="CryptoSnapshot">
                    <h3>Total Cryptocurrencies</h3>
                    <p>{ globalStats.total }</p>
                </div>
                <div className="CryptoSnapshot">
                    <h3>Total Coins</h3>
                    <p>{ millify(globalStats.totalCoins) }</p>
                </div>
                <div className="CryptoSnapshot">
                    <h3>Total Exchanges</h3>
                    <p>{ millify(globalStats.totalExchanges) }</p>
                </div>
                <div className="CryptoSnapshot">
                    <h3>Total Market Cap</h3>
                    <p>{ millify(globalStats.totalMarketCap) }</p>
                </div>
                <div className="CryptoSnapshot">
                    <h3>Total 24hr Volume</h3>
                    <p>{ millify(globalStats.total24hVolume) }</p>
                </div>
                <div className="CryptoSnapshot">
                    <h3>Total Markets</h3>
                    <p>{ millify(globalStats.totalMarkets) }</p>
                </div>
            </div>
        </>
    )
}

export default Dashboard;