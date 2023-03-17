'use client';

import Link from "next/link";
import moment from "moment/moment";

import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

const News = ({ simplified }) => {

  const { data: cryptoNews } = useGetCryptoNewsQuery({ 
    newsCategory: 'Crypto', count: simplified ? 6 : 25 
  });

  const cryptoNewsPlaceholder = "/assets/CryptoNewsPlaceholder.jpg",
        cryptoNewsProviderPlaceholder = "/assets/CryptoNewsProviderPlaceholder.svg";

  if (!cryptoNews?.value) return 'Please wait, news is loading...'

  console.log(cryptoNews);
  
  return (
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
            <p>{ news.provider[0].name }</p>
          </div>
        </Link>
      )) }
    </div>
  )
}

export default News