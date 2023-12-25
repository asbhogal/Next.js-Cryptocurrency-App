export const metadata: Metadata = {
  title: "Cryptoverse | Dashboard",
  description:
    "View cryptocurrency stats, market cap and top 10 cryptocurrencies, as well as browse the statistics of many others",
};

import { Dashboard } from "@/components";
import { Metadata } from "next";

export default function App() {
  return <Dashboard />;
}
