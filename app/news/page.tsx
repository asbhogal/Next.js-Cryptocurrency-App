import { News } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News | Cryptoverse",
  description: "The latest news from the world of crypto",
};

export default function page() {
  return <News />;
}
