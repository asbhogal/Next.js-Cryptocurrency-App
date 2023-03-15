import Link from "next/link";
import { BsCurrencyExchange, BsCurrencyBitcoin, BsNewspaper } from "react-icons/bs";
import { BiHomeAlt2 } from "react-icons/bi"
import "../styles/index.scss";

const Navbar = () => {
  return (
    <>
        <div className="LogoContainer">
            <h1 className="MainHeading">
                cryptoverse
            </h1>
            <img
                src="/assets/Cryptoverse-Icon.svg"
            />
        </div>
        <ul className="NavList">
            <li className="NavListItem">
                <Link href="/"><BiHomeAlt2 size={ 28 } /><p>Home</p></Link>
            </li>
            <li className="NavListItem">
                <Link href="/crypto-currencies"><BsCurrencyBitcoin size={ 28 } /><p>Cryptocurrencies</p></Link>
            </li>
            <li className="NavListItem">
                <Link href="/exchange-rates"><BsCurrencyExchange size={ 28 } /><p>Exchange Rates</p></Link>
            </li>
            <li className="NavListItem">
                <Link href="/news"><BsNewspaper size={ 28 } /><p>News</p></Link>
            </li>
        </ul>
    </>
  )
}

export default Navbar;