'use client';

import { Dashboard, Navbar } from "./components";
import "./styles/index.scss";

export default function App() {
    return (
        <div className="App">
            <nav className="Nav">
                <Navbar />
            </nav>
            <section className="Dashboard">
                <Dashboard />
            </section>
            <footer className="Footer">

            </footer>
        </div>
    )
}