"use client";

import Link from "next/link";
import {
  BsCurrencyExchange,
  BsCurrencyBitcoin,
  BsNewspaper,
} from "react-icons/bs";
import { BiHomeAlt2 } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="Nav">
      <div className="LogoContainer">
        <h1 className="MainHeading">cryptoverse</h1>
        <img src="/assets/Cryptoverse-Icon.svg" alt="Cryptoverse logo" />
      </div>
      <ul className="NavList">
        <li className="NavListItem">
          <Link href="/" aria-label="Home">
            <BiHomeAlt2 size={28} />
            <p>Home</p>
          </Link>
        </li>
        <li className="NavListItem">
          <Link href="/crypto-currencies" aria-label="Cryptocurrencies">
            <BsCurrencyBitcoin size={28} aria-hidden="true" />
            <p>Cryptocurrencies</p>
          </Link>
        </li>
        <li className="NavListItem">
          <Link href="/exchanges" aria-label="Exchanges">
            <BsCurrencyExchange size={28} aria-hidden="true" />
            <p>Exchanges</p>
          </Link>
        </li>
        <li className="NavListItem">
          <Link href="/news" aria-label="News">
            <BsNewspaper size={28} aria-hidden="true" />
            <p>News</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
