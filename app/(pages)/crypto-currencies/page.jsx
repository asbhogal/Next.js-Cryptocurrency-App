'use client';

import { Navbar, Cryptocurrencies } from '@/app/components/index.js';

export const metadata = {
  title: 'Cryptoverse | Cryptocurrencies  ',
  favicon: '/favicon.ico'
}

export default function page() {
  return (
      <>
        <Navbar />
        <Cryptocurrencies />
      </>
      
  )
}
