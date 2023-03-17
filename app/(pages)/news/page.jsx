'use client';

import News from "@/app/components/News"

export const metadata = {
  title: 'Cryptoverse | News',
  favicon: '/favicon.ico'
}

export default function page() {
  return (
    <div className="Content">
      <News />
    </div>
  )
}