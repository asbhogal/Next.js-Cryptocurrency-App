'use client';

import store from "./store/store.js";
import { Provider } from "react-redux";

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
        <Provider store={ store }>
          { children }
        </Provider>
        </body>
      </html>
    )
  }