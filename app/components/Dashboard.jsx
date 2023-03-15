'use client';

import millify from "millify";
import { IoMdNotifications } from "react-icons/io"
import { useGetCryptosQuery } from "../services/cryptoApi.js";
import { TopCryptos } from "./index.js";

const Dashboard = () => {

    const   { data, isFetching } = useGetCryptosQuery(),
            globalStats = data?.data?.stats;

    console.log(globalStats);
    
    if(isFetching) return 'Please wait, data loading...';

    return (
        <>
            <div className="DashboardHeading">
                <h2>Dashboard</h2>
                <div className="IconTray">
                    <div className="CurrentStatus">
                        <p>Status</p>
                        <span className="CurrentStatusLight">
                            <span className="AnimatedPulseFront"></span>
                            <span className="AnimatedPulseBack"></span>
                        </span>
                    </div>
                    <div className="Notifications">
                            <IoMdNotifications />
                        </div>
                    </div>
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
                    <p>{ `$${millify(globalStats.totalMarketCap, { precision: 2} ) }` }</p>
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

            <TopCryptos />

        </>
    )
}

export default Dashboard;