'use client';

import millify from "millify";

import { useGetCryptosQuery } from "../services/cryptoApi.js";

const Dashboard = () => {

    const { data, isFetching } = useGetCryptosQuery();

    console.log(data);

    return (
        <>
            <div className="DashboardHeading">
                <h2>Global Crypto Stats</h2>
            </div>
            <div className="CryptoSnapshots">
                <div className="CryptoSnapshot">
                    <h3>Total Cryptocurrencies</h3>
                    <p>5</p>
                </div>
                <div className="CryptoSnapshot">
                    <h3>Total Exchanges</h3>
                    <p>5</p>
                </div>
                <div className="CryptoSnapshot">
                    <h3>Total Market Cap</h3>
                    <p>5</p>
                </div>
                <div className="CryptoSnapshot">
                    <h3>Total 24hr Volume</h3>
                    <p>5</p>
                </div>
                <div className="CryptoSnapshot">
                    <h3>Total Markets</h3>
                    <p>5</p>
                </div>
            </div>
        </>
    )
}

export default Dashboard;