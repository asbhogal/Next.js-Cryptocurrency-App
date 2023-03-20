'use client';

import { Navbar, News } from "@/app/components";

export const metadata = {
  title: 'Cryptoverse | Latest News',
  favicon: '/favicon.ico'
}

export default function page() {
  return (
    <>
      <Navbar />
      <News />
    </>
  )
}