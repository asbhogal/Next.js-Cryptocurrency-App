'use client';

import millify from "millify";
import { LineWave } from "react-loader-spinner";
import { useGetCryptosQuery } from "../services/cryptoApi.js";
import { IoMdNotifications } from "react-icons/io"
import { TopCryptos } from "./index.js";

const Dashboard = () => {

    const   { data, isFetching } = useGetCryptosQuery(12),
            globalStats = data?.data?.stats;
    
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
        <div className="Dashboard Content">
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
                        <IoMdNotifications  />
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
                    <p>{ millify(globalStats.totalCoins, { space: true }) }</p>
                </div>
                <div className="CryptoSnapshot">
                    <h3>Total Exchanges</h3>
                    <p>{ millify(globalStats.totalExchanges) }</p>
                </div>
                <div className="CryptoSnapshot">
                    <h3>Total Market Cap</h3>
                    <p>{ `$${millify(globalStats.totalMarketCap, { precision: 2, space: true } ) }` }</p>
                </div>
                <div className="CryptoSnapshot">
                    <h3>Total 24hr Volume</h3>
                    <p>{ millify(globalStats.total24hVolume, { space: true }) }</p>
                </div>
                <div className="CryptoSnapshot">
                    <h3>Total Markets</h3>
                    <p>{ millify(globalStats.totalMarkets, { space: true }) }</p>
                </div>
            </div>
            <TopCryptos simplified />
        </div>
    )
}

export default Dashboard;