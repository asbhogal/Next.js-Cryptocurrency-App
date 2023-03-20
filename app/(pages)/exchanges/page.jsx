'use client';

import { Navbar } from "@/app/components";
import Exchanges from "@/app/components/Exchanges";

export const metadata = {
  title: 'Cryptoverse | Exchange Rates',
  favicon: '/favicon.ico'
}

export default function page() {
  return (
    <>
      <Navbar />
      <Exchanges />
    </>
  )
}