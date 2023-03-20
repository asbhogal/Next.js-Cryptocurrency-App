'use client';

import store from "./store/store.js";
import { Provider } from "react-redux";
import "./styles/index.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <div className="App">
      <Provider store={ store }>
        { children }
      </Provider>
      </div>
      </body>
    </html>
  )
}