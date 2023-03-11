'use client';

import store from "../store/store";
import { Provider } from "react-redux";

export const metadata = {
    title: 'Cryptoverse',
    favicon: '/favicon.ico'
}

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