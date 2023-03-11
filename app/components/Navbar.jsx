import Link from "next/link";

const Navbar = () => {
  return (
    <>
        <div className="LogoContainer">
            <img
                src="/assets/Cryptoverse-Icon.svg"
            />
        </div>
        <ul className="NavList">
            <li className="NavListItem">
                <Link href="/">Home</Link>
            </li>
            <li className="NavListItem">
                <Link href="/test1">Cryptocurrencies</Link>
            </li>
            <li className="NavListItem">
                <Link href="/">Exchange Rates</Link>
            </li>
            <li className="NavListItem">
                <Link href="/">News</Link>
            </li>
        </ul>
    </>
  )
}

export default Navbar;