"use client";

import store from "../store/store";
import { Provider } from "react-redux";
import "@/styles/index.scss";
import { Navbar } from "@/components";
import { noto_sans } from "@/utils/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${noto_sans.className}`}>
      <body>
        <Navbar />
        <main className="App">
          <Provider store={store}>{children}</Provider>
        </main>
      </body>
    </html>
  );
}
