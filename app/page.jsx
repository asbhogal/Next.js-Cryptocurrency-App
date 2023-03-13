export const metadata = {
    title: 'Cryptoverse',
    favicon: '/favicon.ico'
}

import { Dashboard } from "./components";
import "./styles/index.scss";

export default function App() {
    return (
        <section className="Dashboard">
            <Dashboard />
        </section>
    )
}