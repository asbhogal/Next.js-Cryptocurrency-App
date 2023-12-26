import Exchanges from "@/components/Exchanges";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exchanges | Cryptoverse",
  description: "The latest cryptocurrency exchange rates",
};

export default function page() {
  return <Exchanges />;
}
