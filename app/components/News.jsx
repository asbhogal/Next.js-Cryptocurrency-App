'use client';

import Link from "next/link";
import moment from "moment/moment";
import { LineWave } from "react-loader-spinner";
import { IoMdNotifications } from "react-icons/io";

import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

const News = ({ simplified }) => {

  const { data: cryptoNews } = useGetCryptoNewsQuery({ 
    newsCategory: 'Crypto', count: simplified ? 6 : 20 
  });

  const cryptoNewsPlaceholder = "/assets/CryptoNewsPlaceholder.jpg",
        cryptoNewsProviderPlaceholder = "/assets/CryptoNewsProviderPlaceholder.svg";

  if (!cryptoNews?.value) return <LineWave
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

  console.log(cryptoNews);
  
  return (
    <div className="NewsPanel">
      <div className="DashboardHeading">
        <h2>Latest Crypto News</h2>
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
      <div className="News">
        { cryptoNews.value.map((news, i) => (
          <Link className="CryptoNewsCard" key={ i } href={ news.url } target="_blank">
            <img className="CryptoNewsImg" src={ news?.image?.thumbnail?.contentUrl || cryptoNewsPlaceholder } />
            <p>{ news.name }</p>
            <p>{ news.description > 100 ? `${ news.description.subString(0, 100)}...` : news.description }</p>
            <div className="NewsProviderDetails">
              <div className="NewsProviderLogo">
                <img src={ news.provider[0]?.image?.thumbnail?.contentUrl || cryptoNewsProviderPlaceholder } />
              </div>
              <p className="NewsProviderName">{ news.provider[0].name }</p>
              <p className="NewsDatePublished">{ moment(news.datePublished).startOf('ss').fromNow() }</p>
            </div>
          </Link>
        )) }
      </div>
    </div>
  )
}

export default News