import Link from "next/link";
import { BsCurrencyExchange, BsCurrencyBitcoin, BsNewspaper } from "react-icons/bs";
import { BiHomeAlt2 } from "react-icons/bi"

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
                <Link href="/"><BiHomeAlt2 />Home</Link>
            </li>
            <li className="NavListItem">
                <Link href="/crypto-currencies"><BsCurrencyBitcoin />Cryptocurrencies</Link>
            </li>
            <li className="NavListItem">
                <Link href="/exchange-rates"><BsCurrencyExchange />Exchange Rates</Link>
            </li>
            <li className="NavListItem">
                <Link href="/news"><BsNewspaper />News</Link>
            </li>
        </ul>
    </>
  )
}

export default Navbar;