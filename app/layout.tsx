"use client";

import store from "../store/store";
import { Provider } from "react-redux";
import "@/styles/index.scss";
import { Navbar } from "@/components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="App">
          <Provider store={store}>{children}</Provider>
        </div>
      </body>
    </html>
  );
}
