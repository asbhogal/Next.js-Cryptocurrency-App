import { Cryptocurrencies } from "@/components/index";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cryptocurrencies | Cryptoverse",
  description: "The current top 50 cryptocurrencies by market capitalization",
};

export default function page() {
  return <Cryptocurrencies />;
}
