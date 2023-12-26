"use client";

import Link from "next/link";
import { LineWave } from "react-loader-spinner";
import { IoMdNotifications } from "react-icons/io";

import { useGetCryptoNewsQuery } from "@/services/cryptoNewsApi";
import { formatDate } from "@/utils/functions";
import { NewsData } from "@/utils/types";

const News = () => {
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: "crypto",
  });

  const cryptoNewsPlaceholder = "/assets/CryptoNewsPlaceholder.jpg";
  const cryptoNewsProviderPlaceholder =
    "/assets/CryptoNewsProviderPlaceholder.svg";

  if (!cryptoNews)
    return (
      <LineWave
        height="100"
        width="100"
        color="#d9d9d9"
        ariaLabel="line-wave"
        wrapperStyle={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
        visible={true}
      />
    );

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
            <IoMdNotifications />
          </div>
        </div>
      </div>
      <div className="News">
        {cryptoNews?.data?.map((news: NewsData) => (
          <Link
            className="CryptoNewsCard"
            key={news.uuid}
            href={news?.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="CryptoNewsImg"
              src={news.image_url || cryptoNewsPlaceholder}
              alt={`A snapshot image from ${news.source}`}
            />
            <p className="NewsTitle">{news.title}</p>
            <div className="NewsProviderDetails">
              <p>{news.description}</p>
              <div className="NewsGutter">
                <p className="NewsProviderName">{news.source}</p>
                <p className="NewsDatePublished">
                  {formatDate(news.published_at)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default News;
