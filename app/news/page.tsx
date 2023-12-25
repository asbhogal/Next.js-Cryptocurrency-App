"use client";

import { Navbar, News } from "@/components";

export default function page() {
  return (
    <>
      <Navbar />
      <News simplified={true} />
    </>
  );
}
