'use client';

import Cryptocurriencies from '@/app/components/Cryptocurrencies';

export const metadata = {
  title: 'Cryptoverse | Cryptocurrencies  ',
  favicon: '/favicon.ico'
}

export default function page() {
  return (
    <div className="Content">
      <Cryptocurriencies />
    </div>
  )
}
