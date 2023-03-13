'use client';

import store from "./store/store.js";
import { Provider } from "react-redux";
import { Navbar } from "./components/index.js";
import "./styles/index.scss";

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
        <Provider store={ store }>
          <div className="App">
          <div className="Nav">
            <Navbar />
          </div>
          { children }
          </div>
        </Provider>
        </body>
      </html>
    )
  }